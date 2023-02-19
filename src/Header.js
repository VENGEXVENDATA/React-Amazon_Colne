import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication=()=>{
        if (user){
          auth.signOut();  
        }
    }
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
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option1">Hello, {!user?'Guest':user.email}</span>
                    <span className="header_option2">{user? 'Sign out':'Sign In'}</span>
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
