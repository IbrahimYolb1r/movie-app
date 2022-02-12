import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function MovieInfo() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [movie, setMovie] = useState()

    async function fetchMovie(id) {
        const { data } = await axios.get(
            `https://www.omdbapi.com/?apikey=b19067db&i=${id}`
        )
        setMovie(data)
        console.log(data)
    }

    useEffect(() => {
        fetchMovie(id)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="movie__selected--top">
                    <button className='back-btn' onClick={() => navigate('/movies')}>← Back</button>
                </div>
                {
                    movie
                        ? (
                            <div className="movie__selected">
                                <figure className='movie__selected--figure'>
                                    <img src={movie?.Poster} alt="" className='movie__selected--img' />
                                </figure>
                                <div className='movie__selected--description'>
                                    <h3 className='movie__selected--title'>{movie?.Title}</h3>
                                    <h3 className='movie__summary--title'>Plot</h3>
                                    <p>{movie?.Plot}</p>
                                    <h3 className='movie__summary--rating'>Rating: {movie?.imdbRating}</h3>
                                    <h3 className='movie__summary--runtime'>Runtime: {movie?.Runtime}</h3>
                                    <h3 className='movie__summary--year'>Year Released: {movie?.Year}</h3>
                                </div>
                            </div>
                        )
                        : <>
                            <div className='movie__selected'>
                                <div className='movie__selected--figure'>
                                    <div className="movie__img--skeleton"></div>
                                </div>
                                <div className='movie__selected--description'>
                                    <div className="skeleton movie__title--skeleton"></div>
                                    <div className="skeleton movie__plot--skeleton"></div>
                                    <div className="skeleton movie__summary--skeleton"></div>
                                    <div className="skeleton movie__rating--skeleton"></div>
                                    <div className="skeleton movie__runtime--skeleton"></div>
                                    <div className="skeleton movie__year--skeleton"></div>
                                </div>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}