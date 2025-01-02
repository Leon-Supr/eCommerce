import React from 'react';
import './header.scss';
// import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon.png'

const Header = () => {

    const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

    return (
        <>
            <nav className='header'>
                <a to="/" className="header__logo"> Tienda E
                    <img src={logo} alt="" />
                </a>

                <ul className='header__nav-list'>
                    <li className='header__list-item'>
                        <a
                            className={({ isActive }) => linkIsActive(isActive)}
                            to="/"
                        >Home</a>
                    </li>
                    <li className='header__list-item'>
                        <a href="" className={({ isActive }) => linkIsActive(isActive)} to="/dashboard">Dashboard</a>
                    </li>
                    <li className='header__list-item'>
                        <a href="" className={({ isActive }) => linkIsActive(isActive)} to="/secret">Secret</a>
                    </li>
                    <li className='header__list-item'>
                        <a href="" className="header__item-link" to="/"
                        >Logout</a>
                    </li>
                    {/* Si Auth es false, obvio va a pedir sign up y login  */}
                    <li className='header__list-item'>
                        <a href="" className={({ isActive }) => linkIsActive(isActive)} to="/login">Login</a>
                    </li>
                    <li className='header__list-item'>
                        <a href="" className={({ isActive }) => linkIsActive(isActive)} to="/signup">Sign Up</a>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Header
