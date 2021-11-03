import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';
import LoaderSpin from '../Loader/LoaderSpin';
import { fetchGetMovieDetails } from '../services/movies-api';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Cast = lazy(() =>
  import('./Cast.js' /* webpackChunkName: "cast-subpage" */),
);
const Reviews = lazy(() =>
  import('./Reviews.js' /* webpackChunkName: "reviews-subpage" */),
);

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  // console.log(useRouteMatch());
  console.log('location in MovieDetails:', location);

  const [movie, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchGetMovieDetails({ movieId })
      .then(setMovieDetails)
      .catch(err => {
        console.log(err.message);
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.push(
      location?.state?.from?.state?.from?.state?.from ??
        location?.state?.from?.state?.from ??
        location?.state?.from ??
        '/',
    );
    // console.log('location in button:', location);

    // console.log('history in button', history);
  };

  // const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="240px"
          />
          <p>{movie.title}</p>
          <p>{movie.release_date || movie.first_air_date}</p>
          <p>{movie.overview}</p>
        </div>
      )}
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: { from: location },
        }}
      >
        <p>Cast</p>
      </NavLink>
      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: { from: location },
        }}
      >
        <p>Reviews</p>
      </NavLink>
      <hr />
      <Suspense fallback={<LoaderSpin />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
