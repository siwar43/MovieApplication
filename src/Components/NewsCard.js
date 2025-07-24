import React from 'react';
import ReactStars from 'react-stars';

function NewsCard({ news }) {
    return (
        <div className="news-card-wrapper">
        <div className="news-card">
            <img src={news.posterURL} alt={news.title} className="news-image" />
            
            <div className="news-rating">
            <ReactStars
                count={5}
                size={24}
                color2="#E50914" 
                edit={false}
                value={news.rating}
            />
            </div>

            <div className="news-overlay">
            <div className="news-info">
                <h5>{news.title}</h5>
                <p>{news.description}</p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default NewsCard;
