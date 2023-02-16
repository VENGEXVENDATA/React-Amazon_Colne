import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/> {/*  logo */}
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_nav">
                <Link to="/login">
                <div className="header_option">
                    <span className="header_option1">Hello Guest</span>
                    <span className="header_option2">Sign in</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className="header_option1">Returns
                    </span>
                    <span className="header_option2">
                        & Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Your</span>
                    <span className="header_option2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_option2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>


            </div>
        </div>
    );
}

export default Header
