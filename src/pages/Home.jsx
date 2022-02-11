import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cinema from '../assets/cinema.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

export default function Home({onSearch}) {
    const [searchTitle, setSearchTitle] = useState("")
    const navigate = useNavigate()

    const onMovieSearch = async (searchTitle) => {
        await onSearch(searchTitle)
        navigate("/movies")
    }

    return (
        <>
            <section id="landing">
                    <div className="header__container">
                        <div className="header__description">
                            <h1>The World's best movie searching platform</h1>
                            <h2>Find the right movie with <span className="purple">Movify</span></h2>
                            <div className='input__wrapper'>
                                <input
                                    type="text"
                                    placeholder='Search by Name or Keyword'
                                    value={searchTitle}
                                    onChange={(event) => setSearchTitle(event.target.value)}
                                    onKeyPress={(event) => event.key === 'Enter' && onMovieSearch(searchTitle)}
                                    className='landing__input'
                                />
                                <button onClick={() => onMovieSearch(searchTitle)} className='btn landing__btn'><FontAwesomeIcon icon="search" /></button>
                            </div>
                        </div>
                        <figure className="header__img--wrapper">
                            <img src={Cinema} className='header__img' />
                        </figure>
                    </div>
            </section>
        </>
    )
}
