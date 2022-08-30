import React, { useState } from 'react';

import './Search.css';
import search from '../../images/search.svg';
import close from '../../images/close.svg';

const Search = () => {
    const [value, setValue] = useState();

    return (
        <form className="search">
            <img className="search__search-img" src={search} alt=""/>
            <input className="tabs search__input"
                   type="text"
                   placeholder="Поиск"
                   value={value}/>
            <img className="search__close-img"
                 src={close}
                 alt="close button"
                 onClick={() => console.log('clicked')}/>
        </form>
    );
};

export default Search;