import React from 'react';
import ReactStars from 'react-stars';
import './MovieCard.css';

function MovieCard({ el }) {
  return (
    <div className="movie-card-wrapper">
      <div className="movie-card">
        <img src={el.posterurl} alt={el.name} className="movie-image" />

        <div className="movie-overlay">
          <div className="movie-info">
            <h5>{el.name}</h5>
            <p>{el.description.length > 120 ? el.description.slice(0, 120) + '...' : el.description}</p>
          </div>
        </div>

        <div className="movie-rating">
          <ReactStars
            count={5}
            size={24}
            color2="#E50914"
            edit={false}
            value={el.rating}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;