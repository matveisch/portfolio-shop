import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {CommonContext} from "../../pages/Layout/Layout";

import './NavBar.css';

const NavBar = () => {
    const {currentOS, setCurrentOS} = useContext(CommonContext);

    return (
        <nav className="navbar">
            <ul>
                <li className={currentOS === 'Все' ? 'chosen' : ''}
                    onClick={() => {setCurrentOS('Все')}}><Link to="#">Все</Link></li>
                <li className={currentOS === 'Десктопные' ? 'chosen' : ''}
                    onClick={() => {setCurrentOS('Десктопные')}}><Link to="#">Десктопные</Link></li>
                <li className={currentOS === 'Мобильные' ? 'chosen' : ''}
                    onClick={() => {setCurrentOS('Мобильные')}}><Link to="#">Мобильные</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;