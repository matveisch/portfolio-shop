import React, {useEffect, useState} from 'react';
import uniqid from "uniqid";

import gameCover from '../../data/mocks/mock-images/game-cover.svg';
import angryBirdsImg from '../../data/mocks/mock-images/angry-birds.svg';
import spaceImg from '../../data/mocks/mock-images/space-img.svg';
import roadImg from '../../data/mocks/mock-images/road-img.svg';

import './ImageCarousel.css';

const ImageCarousel = () => {
    const imagesArray = [gameCover, angryBirdsImg, spaceImg, roadImg];

    const [currentImage, setCurrentImage] = useState(gameCover);
    const [currentIndex, setCurrentIndex] = useState(0);

    // изменение текущей картинки в зависимости от индекса
    useEffect(() => {
        setCurrentImage(imagesArray[currentIndex]);
    }, [currentIndex])

    // увеличение/уменьшение индекса по клику по стрелкам
    const updateIndex = (operation) => {
        if (operation === 'increase') {
            if (currentIndex < (imagesArray.length - 1)) {
                setCurrentIndex(currentIndex + 1);
            }
            else{
                setCurrentIndex(0);
            }
        } else if (operation === 'decrease') {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
            else{
                setCurrentIndex(imagesArray.length - 1);
            }
        }
    }

    const listOfImages = () => {
        return imagesArray.map(image => {
            return (
                <img key={uniqid()}
                     className="mini-image"
                     src={image}
                     style={currentImage === image ? {boxShadow: '0 0 0 2px #494799'} : null}
                     alt="" onClick={() => {
                         setCurrentImage(image);
                         setCurrentIndex(imagesArray.indexOf(image))
                     }}/>
            );
        });
    };

    return (
        <div className="carousel">
            <div className="carousel__current-img">
                <img src={currentImage} alt=""/>
            </div>
            <div className="carousel__image-library">
                <svg className="carousel-arrow"
                     onClick={() => {updateIndex('decrease')}}
                     width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z" fill="#EFF1F1"/>
                    <path d="M23 13L17.6694 19.2191C17.2842 19.6684 17.2842 20.3316 17.6694 20.7809L23 27" stroke="#2B3F6C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="library-images">
                    {listOfImages()}
                </div>
                <svg className="carousel-arrow"
                     style={{transform: 'rotate(180deg)'}}
                     onClick={() => {updateIndex('increase')}}
                     width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z" fill="#EFF1F1"/>
                    <path d="M23 13L17.6694 19.2191C17.2842 19.6684 17.2842 20.3316 17.6694 20.7809L23 27" stroke="#2B3F6C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
};

export default ImageCarousel;