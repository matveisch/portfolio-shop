import React, {useEffect, useContext} from 'react';

import './Account.css';
import UserInit from "../../ui/UserInit/UserInit";
import {CommonContext} from "../Layout/Layout";

const Account = () => {
    const {
        currentDisplayStyle,
        passPopup, setPassPopup,
        emailPopup, setEmailPopup,
        user
    } = useContext(CommonContext);

    useEffect(() => {
        if (currentDisplayStyle === 'block' ||
            emailPopup === 'block' ||
            passPopup === 'block') {
            document.body.style.overflow = "hidden"
            document.body.style.pointerEvents = "none"
        } else {
            document.body.style.overflow = ""
            document.body.style.pointerEvents = "auto"
        }
    }, [currentDisplayStyle, emailPopup, passPopup])

    if (user) {
        return (
            <div className={`account ${(
                currentDisplayStyle === 'block' ||
                passPopup === 'block' ||
                emailPopup === 'block'
            ) ? 'on-popup' : ''}`}>
                <h1 className="h1 account__title">Личный кабинет</h1>
                <div className="account__data">
                    <h2 className="h2">Учетная запись</h2>
                    <div className="image-email">
                        <UserInit color={'#494799'} />
                        <div className="approved">
                            <h3 className="title">{user.email}</h3>
                            <p className="body">Подтверждена</p>
                        </div>
                    </div>
                    <div className="email">
                        <h2 className="title">{user.email}</h2>
                        <h2 className="title change-email"
                            onClick={() => setEmailPopup('block')}>Изменить</h2>
                    </div>
                    <h2 className="title change-password"
                        onClick={() => setPassPopup('block')}>Сменить пароль</h2>
                </div>
            </div>
        );

    }

};

export default Account;