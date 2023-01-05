import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.scss"
const Header = () => {
  return (
    <header className='header'>


        <Link className='header__link' to={'/'}>
            <p>CS:GO</p>
        </Link>

         <Link className='header__right-link' to={'/cart'}>
         <i className="fa-solid fa-cart-shopping"></i>
        </Link> 



    </header>
  )
}

export default Header;