import React, {useContext, useEffect} from 'react';
import uniqid from "uniqid";

import './Cart.css';

import {CommonContext} from "../Layout/Layout";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../ui/Button/Button";

const Cart = () => {
    const {cartItems, currentDisplayStyle} = useContext(CommonContext);

    useEffect(() => {
        if (currentDisplayStyle === 'block') {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = ""
            document.body.style.pointerEvents = "auto"
        }
    }, [currentDisplayStyle])

    const itemsList = () => {
        return cartItems.map(item => {
            return (
                <CartItem key={uniqid()} item={item} />
            )
        })
    }

    const countItemsSum = () => {
        return cartItems.reduce((sum, {price}) => sum + price, 0);
    }

    return (
        <div className={`cart ${currentDisplayStyle === 'block' ? 'on-popup' : ''}`}>
            <h1 className="h1">Корзина</h1>
            <div className="cart__body">
                <div className="cart__total-sum">
                    <div className="total-and-button">
                        <div className="total">
                            <h1 className="h2">Итого</h1>
                            <h1 className="h2">{`${countItemsSum()} ₽`}</h1>
                        </div>
                    </div>
                    <Button name={'Оформить'} bgColor={'#494799'} width={'100%'}/>
                </div>
                <div className="cart__items">
                    {itemsList()}
                </div>
            </div>
        </div>
    );
};

export default Cart;