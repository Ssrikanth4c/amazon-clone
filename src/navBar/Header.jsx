import React from 'react'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Header.css'
function Header() {
    return (
        <nav className='header'>
            {/*
             side nav-bar
             logo
             searchbox(inputbox, searchlogo)
             3 links ( accound , orderr, try prime)
             cart icon
            */
            }

            {/* logo */}
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo"/>
            </Link>
            {/* End of Logo */}
            {/* searchBar */}
            <div className="header__searchBox">
                <input className='header__searchInput' />
                <SearchIcon   className='header__serachIcon' />
            </div>
            {/* End of SearchBar */}
            {/* 3 links --- navlinks */}
            <div className="header__navBar">
                {/* account link */}
                <Link to='/account' className='header__link'>
                    <div className="header__option">
                        <span>Hello, Sign in</span>
                        <span>Account</span>
                    </div>
                </Link>
                {/* Order link */}
                <Link to='/returns' className='header__link'>
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                {/* try Prime link */}
                <Link to='/try_prime' className='header__link'>
                    <div className="header__option">
                        <span>Try</span>
                        <span>Prime</span>
                    </div>
                </Link>
                {/* add to card link */}
                <Link to='/cart' className='header__link'>
                    <div className="header__optionCart">
                        <ShoppingCartOutlinedIcon  fontSize='large'/>
                        <span>10</span>
                    </div>
                </Link>
            </div>
            {/* End of navLinks */}
        </nav>
    )
}

export default Header
