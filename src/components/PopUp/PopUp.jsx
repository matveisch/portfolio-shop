import React, {isValidElement, useContext, useEffect, useState} from 'react';
import {HTTP} from "../../interface/HTTP";

import Button from "../../ui/Button/Button";
import {CommonContext} from "../../pages/Layout/Layout";

import './PopUp.css';

const PopUp = () => {
    const {
        currentDisplayStyle, setCurrentDisplayStyle,
        setUser
    } = useContext(CommonContext);

    const [popUpType, setPopUpType] = useState('login');

    // информация с формы
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // восстановление пароля
    const [forgotPassword, setForgotPassword] = useState(false);

    const forgotPasswordForm = () => {
        return (
            <div className="entrance-content forgot-password-content">
                <h2 className="h2">Восстановление пароля</h2>
                <p className="label">Вышлем пароль на указанный
                    вами при регистрации адрес почты</p>
                <form className="inputs" >
                    <input type="email"
                           pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                           className={'body'}
                           onChange={handleDataChange}
                           placeholder="Электронная почта"
                           name="email"
                           required />
                    <Button bgColor={'#494799'} name={'Отправить'} width={'100%'} />
                </form>
                <div className="login-signup-buttons" >
                    <p style={{textAlign: 'center'}}><span onClick={() => {
                        setForgotPassword(false);
                        setPopUpType('login');
                    }} style={{color: '#494799', cursor: 'pointer'}}>Войти</span> или <span onClick={() => {
                        setForgotPassword(false);
                        setPopUpType('signup');
                    }} style={{color: '#494799', cursor: 'pointer'}}>зарегистрироваться</span></p>
                </div>
                <div className="close-btn" onClick={() => setCurrentDisplayStyle('none')}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292845 12.2929C-0.0976798 12.6835 -0.0976789 13.3166 0.292845 13.7072C0.68337 14.0977 1.31653 14.0977 1.70706 13.7072L0.292845 12.2929ZM13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L13.7071 1.70711ZM12.2929 0.292893L0.292845 12.2929L1.70706 13.7072L13.7071 1.70711L12.2929 0.292893Z" fill="white"/>
                        <path d="M1.70706 0.292846C1.31653 -0.0976789 0.683369 -0.0976778 0.292844 0.292846C-0.0976799 0.683371 -0.0976808 1.31653 0.292844 1.70706L1.70706 0.292846ZM12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L12.2929 13.7071ZM13.7071 12.2929L1.70706 0.292846L0.292844 1.70706L12.2929 13.7071L13.7071 12.2929Z" fill="white"/>
                    </svg>
                </div>
            </div>
        )
    }

    const [errorMessage, setErrorMessage] = useState();

    const onSubmit = e => {
        e.preventDefault();

        if (popUpType === 'signup') {
            const returnData = HTTP.createUser(JSON.stringify(loginData));
            returnData.then(r => setErrorMessage(r.email[0]));
        } else if (popUpType === 'login') {
            (async () => {
                const returnData = await HTTP.getLogin('/api/auth/token/login', JSON.stringify(loginData));
                if (returnData.non_field_errors === undefined) {
                    localStorage.setItem('token', returnData.auth_token);
                    const userData = await HTTP.Get("/api/auth/users/me/");
                    setUser(userData);
                    // скрываем форму после отправки/получения даты
                    setCurrentDisplayStyle('none');
                } else {
                    setErrorMessage(returnData.non_field_errors[0]);
                }
            })();
        }
    };

    return (
        <div className="entrance" style={{display: currentDisplayStyle}}>
            {forgotPassword ? forgotPasswordForm() : <div className="entrance-content">
                <div className="entrance-buttons">
                    <h2 className="h2"
                        onClick={() => {
                            setPopUpType('login');
                            setErrorMessage(undefined);
                        }}
                        style={(popUpType === 'login') ? {color: '#494799'} : null}>Вход</h2>
                    <h2 className="h2"
                        onClick={() => {
                            setPopUpType('signup');
                            setErrorMessage(undefined);
                        }}
                        style={(popUpType === 'signup') ? {color: '#494799'} : null}>Регистрация</h2>
                </div>
                <form className="inputs" id="login-form" onSubmit={onSubmit}>
                    <input type="email"
                           className={'body'}
                           required
                           onChange={handleDataChange}
                           placeholder="Электронная почта"
                           name="email"/>
                    <input type="password"
                           className={'body'}
                           onChange={handleDataChange}
                           placeholder="Пароль"
                           required
                           minLength="8"
                           name="password"/>
                    <div className="inputs-buttons">
                        <Button bgColor={'#494799'} name={'Отправить'} width={'100%'}/>
                        {errorMessage ? <p className="body" style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p> : null}
                        <p className="tabs"
                           onClick={() => setForgotPassword(true)}
                           style={(popUpType === 'signup') ? {visibility: 'hidden'} : {display: 'block', cursor: 'pointer'}}>Забыли пароль</p>
                    </div>
                </form>
                <div className="close-btn" onClick={() => setCurrentDisplayStyle('none')}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292845 12.2929C-0.0976798 12.6835 -0.0976789 13.3166 0.292845 13.7072C0.68337 14.0977 1.31653 14.0977 1.70706 13.7072L0.292845 12.2929ZM13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L13.7071 1.70711ZM12.2929 0.292893L0.292845 12.2929L1.70706 13.7072L13.7071 1.70711L12.2929 0.292893Z" fill="white"/>
                        <path d="M1.70706 0.292846C1.31653 -0.0976789 0.683369 -0.0976778 0.292844 0.292846C-0.0976799 0.683371 -0.0976808 1.31653 0.292844 1.70706L1.70706 0.292846ZM12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L12.2929 13.7071ZM13.7071 12.2929L1.70706 0.292846L0.292844 1.70706L12.2929 13.7071L13.7071 12.2929Z" fill="white"/>
                    </svg>
                </div>
            </div>}
        </div>

    );
};

export default PopUp;