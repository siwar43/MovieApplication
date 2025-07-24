import React from 'react';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import './MovieList.css';

function MovieList({ movies, setmovies, text, score }) {
    return (
        <div className="movie-list-wrapper">
            <div className="title-only">
                <h2 className="movie-list-title">Movie List</h2>
            </div>

            {/* Bouton à droite */}
            <div className="button-only">
                <AddMovie movies={movies} setmovies={setmovies} />
            </div>

            <div className="content">
                {movies
                    .filter((el) =>
                        el.name.toLowerCase().includes(text.toLowerCase()) &&
                        el.rating >= score
                    )
                    .map((el, index) => (
                        <MovieCard key={index} el={el} />
                    ))}
            </div>
        </div>
    );
}

export default MovieList;
