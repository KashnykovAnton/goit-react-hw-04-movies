import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { fetchSearchMovies } from '../services/movies-api';
import MoviesSearch from './MoviesSearch';

const MoviesPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  const valueQuery = new URLSearchParams(location.search).get('query');
  // console.log('valueQuery:', valueQuery);

  // console.log('location in Movies:', location);

  useEffect(() => {
    if (!valueQuery) return;
    fetchSearchMovies(valueQuery)
      .then(data => {
        if (data.results.length !== 0) {
          setMovies(data.results);
          // setStatus('resolved');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [valueQuery]);

  const onSearchValue = value => {
    // console.log('value:', value);
    // console.log('history in Movies:', history);
    // console.log('location in Movie BEFORE:', location);
    history.push({ ...location, search: `query=${value}` });
  };

  // console.log('location.search in Movie AFTER:', location.search);

  return (
    <>
      <MoviesSearch onValueSubmit={onSearchValue} />

      {movies && (
        <ul>
          {movies.map(({ id, original_title, name }) => {
            return (
              <li key={id}>
                <Link
                  to={{
                    pathname: `${url}/${id}`,
                    state: { from: location },
                  }}
                >
                  {original_title ?? name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
