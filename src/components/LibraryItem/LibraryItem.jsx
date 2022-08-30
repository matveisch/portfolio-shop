import React from 'react';

import Button from "../../ui/Button/Button";

import './LibraryItem.css';

const LibraryItem = ({item}) => {
    return (
        <div className="library-item">
            <img src={item.img} alt=""/>
            <div className="library-item__description">
                <div className="text">
                    <h1 className="title">{item.name}</h1>
                    <p className="label">Адвенчура</p>
                    <p className="label">Мобильная</p>
                </div>
                <div className="library-item-buttons">
                    <Button bgColor={'#494799'} name={'Скачать'} />
                </div>
            </div>
        </div>
    );
};

export default LibraryItem;