import React from 'react';
import { Link } from 'react-router-dom'
import MovieLogo from '../assets/movify.png'

export default function Nav() {
    return (
        <nav>
            <div className="nav__container">
                <Link to='/'>
                    <img src={MovieLogo} className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to={'/'} className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to={'/'} className="nav__link">
                            Find your movie
                        </Link>
                    </li>
                    <li className="nav__list">
                        <button className='btn__contact'>
                        <Link to={'/'} className="nav__link nav__button">
                            CONTACT
                        </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}