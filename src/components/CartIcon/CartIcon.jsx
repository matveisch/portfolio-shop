import React from 'react';
import {useNavigate} from "react-router-dom";

import './CartIcon.css';
import cartIcon from '../../images/Cart.svg';

const CartIcon = ({numOfGoods}) => {
    const navigate = useNavigate();

    return (
        <div className="cart-icon" onClick={() => navigate('cart')}>
            <img className="cart-icon__cart-img" src={cartIcon} alt=""/>
            <div className="cart-icon__goods-count counter"
                 style={!numOfGoods ? {display: 'none'} : null}>{numOfGoods}</div>
        </div>
    );
};

export default CartIcon;