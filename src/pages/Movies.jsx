import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Movies({ movies }) {
    const navigate = useNavigate()

    useEffect(() => {
        console.log(movies)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="movie-list">
                    {movies ? (movies.map((movie) => (
                        // when using onClick, have an arrow if there is an argument in function,
                        // otherwise it calls immediately
                        <div className="movie" key={movie.imdbID} onClick={() => navigate(`/movies/${movie.imdbID}`)}>
                            <div className="movie-card">
                                <div className="movie-card__container">
                                    <img src={movie.Poster} alt="" className='movie-card__img' />
                                    <h3 className='movie-card__title'>{movie.Title}</h3>
                                </div>
                            </div>
                        </div>
                    ))) :
                        <div className='movie'>
                            <div className="movie-card">
                                <div className="movie-card__container">
                                    <div className="movie-card__img--skeleton"></div>
                                    <div className="skeleton movie-card__title--skeleton"></div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}