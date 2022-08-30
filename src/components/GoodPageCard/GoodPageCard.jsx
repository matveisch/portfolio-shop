import React, {useContext, useState, useEffect} from 'react';

import './GoodPageCard.css';

import {CommonContext} from "../../pages/Layout/Layout";
import Rating from "../../ui/Rating/Rating";
import Button from "../../ui/Button/Button";
import {HTTP} from "../../interface/HTTP";
import {useParams} from "react-router-dom";

const GoodPageCard = ({item}) => {
    const {id} = useParams();

    const [rating, setRating] = useState([
        {
            id: 1,
            rate: 3
        },
        {
            id: 2,
            rate: 5
        },
        {
            id: 3,
            rate: 1
        },
    ]);

    const findAverageRating = (arr) => {
        const { length } = arr;
        return arr.reduce((acc, val) => {
            return acc + (val.rate/length);
        }, 0);
    };

    const {cartItems, setCartItems} = useContext(CommonContext);

    const found = cartItems.some(el => el.id === item.id);

    const addItemToCart = (item) => {
        if (!found && item.price > 0) {
            setCartItems(cartItems.concat(item));
        }
    }

    const [buttonColor, setButtonColor] = useState(found ? '#FFFFFF' : '#494799');

    return (
        <div className="good-card">
            <div className="good-card__images">
                <img className="cover-img" src={item.image} alt="game cover"/>
            </div>
            <div className="good-card__rating-button">
                <div className="rating-categories">
                    <Rating numOfStars={Math.round(findAverageRating(rating))}
                            numOfDownloads={item.downloads}
                            numOfRatings={rating.length}/>
                    <p className="tabs">Адвенчура</p>
                    <p className="tabs">Мобильная</p>
                </div>
                <Button bgColor={'#FFFFFF'}
                        cursor={'auto'}
                        name={!item.price ? 'Скачать' : `${item.price} ₽`} />
                <Button bgColor={buttonColor}
                        name={'В корзину'}
                        onClick={() => {
                            addItemToCart(item);
                            setButtonColor('#FFFFFF');
                        }}
                        width={'100%'}/>
            </div>
        </div>
    );
};

export default GoodPageCard;