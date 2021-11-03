import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from '../services/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log('movieId', movieId);
  console.log('reviews:', reviews);

  useEffect(() => {
    fetchGetMovieReviews({ movieId })
      .then(data => setReviews(data.results))
      .catch(err => console.log(err.message));
  }, [movieId]);

  // console.log('cast:', cast);

  // return <h1>Reviews HERE</h1>;
  return (
    <>
      {(reviews.length !== 0 && (
        <ul>
          {reviews.map(el => {
            return (
              <li key={el.id}>
                {/* <img
                  src={
                    el.profile_path === null
                      ? 'https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg'
                      : `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  }
                  alt={el.name}
                  width="120px"
                /> */}
                <p>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )) || <p>We don't have reviews yet!</p>}
    </>
  );
};

export default Reviews;
