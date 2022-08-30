import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import uniqid from "uniqid";

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import GoodPageCard from "../../components/GoodPageCard/GoodPageCard";

import './GoodPage.css';
import StarRating from "../../ui/StarRating/StarRating";
import Button from "../../ui/Button/Button";
import Review from "../../components/Review/Review";
import {CommonContext} from "../Layout/Layout";
import Preloader from "../../components/Preloader/Preloader";

import data from '../../data/mocks/mock-goods';
import rates from '../../data/mocks/mock-rates';

const GoodPage = () => {
    const {id} = useParams();

    const [currentGood, setCurrentGood] = useState(data.find(item => item.id === Number(id)));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {currentDisplayStyle} = useContext(CommonContext);

    useEffect(() => {
        if (currentDisplayStyle === 'block') {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = ""
            document.body.style.pointerEvents = "auto"
        }
    }, [currentDisplayStyle])

    const [rating, setRating] = useState(rates.find(rate => rate.id === Number(id)).rates);

    const [ratingData, setRatingData] = useState(rates.find(rate => rate.id === Number(id)));

    if (currentGood) {
        return (
            <div className={`good-page ${currentDisplayStyle === 'block' ? 'on-popup' : ''}`}>
                <h1 className="h1 good-page__name">{currentGood.title}</h1>
                <div className="good-page__description-blocks">
                    <div className="carousel-description">
                        <ImageCarousel />
                        <p className="body">{currentGood.description}</p>
                    </div>
                    <GoodPageCard item={currentGood} />
                </div>
                <div className="good-page__reviews">
                    <h2 className="h2">Отзывы</h2>
                    <StarRating setRatingData={setRatingData}/>
                    <div className="textarea-container">
                    <textarea name="review"
                              id="review"
                              className="review-textarea"
                              onChange={(e) => setRatingData(prevState => ({
                                  ...prevState,
                                  ['comment']: e.target.value
                              }))}
                              placeholder="Оставьте комментарий">
                    </textarea>
                        <Button className="send-button" bgColor={'#494799'} name={'Отправить'} />
                    </div>
                    <div className="reviews-list">
                        {rating.map(item => {
                            return (
                                <Review review={item}
                                        key={uniqid()}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Preloader />
        )
    }
};

export default GoodPage;