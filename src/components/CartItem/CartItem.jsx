import React, {useContext} from 'react';

import './CartItem.css';

import Button from "../../ui/Button/Button";
import {CommonContext} from "../../pages/Layout/Layout";
import {SERVER_URL} from "../../interface/HTTP";

const CartItem = ({item}) => {
    const {cartItems, setCartItems} = useContext(CommonContext);

    const deleteItemFromCart = () => {
        const removeIndex = cartItems.findIndex(el => el.id === item.id);
        let array = [...cartItems];
        array.splice(removeIndex, 1);
        setCartItems(array);
    }

    return (
        <div className="cart-item">
            <img src={item.image} alt=""/>
            <div className="cart-item__description">
                <div className="text">
                    <h1 className="title">{item.title}</h1>
                    <p className="label">Адвенчура</p>
                    <p className="label">Мобильная</p>
                </div>
                <div className="cart-item-buttons">
                    <button className="s-btn" onClick={deleteItemFromCart}>Удалить</button>
                    <Button bgColor='#FFFFFF' name={`${item.price} ₽`} border={'none'}/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;