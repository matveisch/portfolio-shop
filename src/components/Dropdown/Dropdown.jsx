import React, {useContext, useState} from 'react';
import {CommonContext} from "../../pages/Layout/Layout";

import './Dropdown.css';

const Dropdown = () => {
    const [dropToggle, setDropToggle] = useState(true);

    const {currentFilter, setCurrentFilter} = useContext(CommonContext);

    return (
        <div className="dropdown">
            <div className="dropdown__current-filter" onClick={() => setDropToggle(!dropToggle)}>
                <p className="tabs">{currentFilter ? currentFilter : 'По умолчанию'}</p>
                <svg className={`${dropToggle ? 'filters-arrow' : ''}`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 7.70393C0.683417 8.09869 1.31658 8.09869 1.70711 7.70393L7 2.44038L12.2929 7.70393C12.6834 8.09869 13.3166 8.09869 13.7071 7.70393C14.0976 7.30918 14.0976 6.66915 13.7071 6.27439L7.70711 0.296069C7.31658 -0.098688 6.68342 -0.098688 6.29289 0.296069L0.292893 6.27439C-0.0976314 6.66915 -0.0976314 7.30917 0.292893 7.70393Z" fill="#494799"/>
                </svg>
            </div>
            <div className="dropdown__options" style={dropToggle ? {display: 'none'} : null}>
                <p className="tabs"
                   title="По умолчанию"
                   onClick={(e) => {
                       setCurrentFilter(e.target.title);
                       setDropToggle(true);
                   }}
                >По умолчанию</p>
                <p className="tabs"
                   title="По рейтингу"
                   onClick={(e) => {
                       setCurrentFilter(e.target.title);
                       setDropToggle(true);
                   }}
                >По рейтингу</p>
                <p className="tabs"
                   title="По цене"
                   onClick={(e) => {
                       setCurrentFilter(e.target.title);
                       setDropToggle(true);
                   }}
                >По цене</p>
                <p className="tabs"
                   title="По дате"
                   onClick={(e) => {
                       setCurrentFilter(e.target.title);
                       setDropToggle(true);
                   }}
                >По дате</p>
            </div>
        </div>
    );
};

export default Dropdown;