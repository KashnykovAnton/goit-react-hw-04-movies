import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../services/movies-api';

const HomePage = () => {
  const location = useLocation();
  // const { url } = useRouteMatch();
  // console.log('url in Home:', url);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if (!movies) return;
    fetchTrendMovies()
      .then(data => {
        if (data.results.length !== 0) {
          // console.log('data:', data);
          setMovies(data.results);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* Сделать красивую галерею плитками!!! */}
      {movies && (
        <ul>
          {movies.map(({ id, original_title, name }) => {
            return (
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {original_title || name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default HomePage;
