import React from "react";
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {

    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">Movies</div>
            </Link>
            <div className="user-image">
                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user"></img>
            </div>
        </div>
    )
}

export default Header;