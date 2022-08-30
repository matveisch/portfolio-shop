import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";

import './AccDropdown.css';
import {HTTP} from "../../interface/HTTP";
import {CommonContext} from "../../pages/Layout/Layout";

const AccDropdown = ({display, setAccDrop}) => {
    const navigate = useNavigate();

    const {setUser} = useContext(CommonContext);

    const logout = async () => {
        await HTTP.logOut();
        setUser({});
        setAccDrop(false);
    }

    return (
        <div className="acc-dropdown" style={display ? {display: 'block'} : {display: 'none'}}>
            <p className="tabs" onClick={() => {
                navigate('account');
                setAccDrop(false);
            }}>Аккаунт</p>
            <p className="tabs" onClick={() => {
                navigate('library');
                setAccDrop(false);
            }}>Библиотека</p>
            <hr/>
            <p className="tabs" onClick={logout}>Выйти</p>
        </div>
    );
};

export default AccDropdown;