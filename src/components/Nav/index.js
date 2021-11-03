import React from 'react'
import { Link, useHistory } from "react-router-dom";


function Nav() {

    let history = useHistory();
    history.goBack()

    return (
        <div className="nav">
            <ul>
                <li onClick={history.goBack}>←</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cards">Cards</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Cotact</Link></li>
                <li><Link to="/fav">Favorite</Link></li>
            </ul>
            
        </div>
    )
}

export default Nav
