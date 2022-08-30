import React, {useContext, useEffect} from 'react';
import uniqid from "uniqid";

import './Library.css';

import mockGoods from "../../data/mocks/mock-goods";
import LibraryItem from "../../components/LibraryItem/LibraryItem";
import {CommonContext} from "../Layout/Layout";

const Library = () => {
    const {currentDisplayStyle} = useContext(CommonContext);

    const listOfLibraryItems = () => {
        return mockGoods.map(item => {
            return (
                <LibraryItem key={uniqid()} item={item} />
            )
        })
    }

    useEffect(() => {
        if (currentDisplayStyle === 'block') {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = ""
            document.body.style.pointerEvents = "auto"
        }
    }, [currentDisplayStyle])

    return (
        <div className={`library ${currentDisplayStyle === 'block' ? 'on-popup' : ''}`}>
            <h1 className="h1">Библиотека</h1>
            <div className="library__items">
                {listOfLibraryItems()}
            </div>
        </div>
    );
};

export default Library;