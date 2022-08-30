import React, {useState, useContext, useEffect} from 'react';
import uniqid from "uniqid";
import {CommonContext} from "../Layout/Layout";
import mockGoods from '../../data/mocks/mock-goods'

import './Main.css';

import NavBar from "../../components/NavBar/NavBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card from "../../components/Card/Card";

export const sortByFilter = (property, array) => {
    return array.sort((a, b) => b[property] - a[property]);
};

const Main = () => {
    const [goods, setGoods] = useState(mockGoods);

    // храним все отфильтрованные товары
    const [filteredGoods, setFilteredGoods] = useState(goods);

    const {
        currentDisplayStyle, setCurrentDisplayStyle, currentFilter
    } = useContext(CommonContext);

    useEffect(() => {
        setCurrentDisplayStyle('none');
    }, [])

    useEffect(() => {
        if (currentDisplayStyle === 'block') {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = ""
            document.body.style.pointerEvents = "auto"
        }
    }, [currentDisplayStyle])

    switch (currentFilter) {
        case ('По умолчанию'):
            sortByFilter('id', filteredGoods);
            break;
        case ('По рейтингу'):
            sortByFilter('rating', filteredGoods);
            break;
        case ('По цене'):
            sortByFilter('price', filteredGoods);
            break;
        case ('По дате'):
            sortByFilter('date', filteredGoods);
            break;
        default:
            sortByFilter('id', filteredGoods);
    }

    // фильрация по os
    const {currentOS} = useContext(CommonContext);

    const filterByOS = (os) => {
        const results = goods.filter(item => {
            return item.os === os;
        })
        setFilteredGoods(results);
    }

    useEffect(() => {
        switch (currentOS) {
            case ('Десктопные'):
                filterByOS('desktop');
                break;
            case ('Мобильные'):
                filterByOS('mobile');
                break;
            default:
                setFilteredGoods(goods);
                break;
        }
    }, [currentOS])

    const listOfCards = () => {
        return filteredGoods.map(item => {
            return (
                <Card item={item} key={uniqid()} />
            )
        })
    }

    return (
        <div className={`main ${currentDisplayStyle === 'block' ? 'on-popup' : ''}`}>
            <div className="main__dropdown-nav">
                <Dropdown />
                <NavBar />
            </div>
            <div className="main__cards">
                {listOfCards()}
            </div>
        </div>
    );
};

export default Main;