import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket' 
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProovider'
import { auth } from './firebase'
import './Header.css'

function Header() {
    const [ { user, basket } ] = useStateValue();
    const logout = () => {
        auth.signOut()
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput">
                </input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link className="header__link" to={user ? '/' : '/login'}>
                    <div className="header__option" onClick={user ? logout : () => {}}>
                        <span className="header__optionLineOne">Hello {user ? user.email : ''}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to="/checkout">
                    <div className="header__option header__basket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
