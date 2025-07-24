import React from 'react';
import ReactStars from 'react-stars';
import './SerieList.css';

function SerieCard({ el }) {
  return (
    <div className="serie-card-wrapper">
      <div className="serie-card">
        <img src={el.posterurl} alt={el.name} className="serie-image" />

        <div className="serie-overlay">
          <div className="serie-info">
            <h5>{el.name}</h5>
            <p>{el.description}</p>
          </div>
        </div>

        <div className="serie-rating">
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

export default SerieCard;
