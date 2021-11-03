import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCast } from '../services/movies-api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log('movieId', movieId);

  useEffect(() => {
    fetchGetMovieCast({ movieId })
      .then(data => setCast(data.cast))
      .catch(err => console.log(err.message));
  }, [movieId]);

  // console.log('cast:', cast);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(el => {
            // console.log('photo:', el.profile_path);

            return (
              <li key={el.cast_id}>
                <img
                  src={
                    el.profile_path === null
                      ? 'https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'
                      : `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  }
                  alt={el.name}
                  width="120px"
                />
                <p>Name: {el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
