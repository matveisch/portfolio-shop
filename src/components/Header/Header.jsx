import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Header.css';
import logo from '../../images/logo_pskovhack.svg';

import Search from "../Search/Search";
import CartIcon from "../CartIcon/CartIcon";
import Button from "../../ui/Button/Button";
import {CommonContext} from "../../pages/Layout/Layout";
import AccDropdown from "../AccDropdown/AccDropdown";
import UserInit from "../../ui/UserInit/UserInit";

const Header = () => {
    const navigate = useNavigate();

    const {cartItems, user} = useContext(CommonContext);

    const {
        currentDisplayStyle, setCurrentDisplayStyle,
        passPopup, emailPopup
    } = useContext(CommonContext);

    const [accDrop, setAccDrop] = useState(false);

    return (
        <header className={`header ${(
            currentDisplayStyle === 'block' || 
            passPopup === 'block' || 
            emailPopup === 'block'
        ) ? 'on-popup' : ''}`}>
            <h1 className="header__logo" onClick={() => navigate('/')}>Shop</h1>
            <Search />
            <div className="header__cart-button">
                <CartIcon numOfGoods={cartItems.length} />
                {!user.hasOwnProperty('id') ?
                    <Button bgColor={'#494799'}
                                onClick={() => setCurrentDisplayStyle('block')}
                                name={'Войти'}/> :
                    <UserInit color={'#494799'}
                              width={'40px'}
                              height={'40px'} onClick={() => setAccDrop(!accDrop)}/>}

            </div>
            <AccDropdown display={accDrop} setAccDrop={setAccDrop}/>
        </header>
    );
};

export default Header;