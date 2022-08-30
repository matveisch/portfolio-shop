import React, {useState, useContext} from 'react';

import './PasswordPopup.css';
import Button from "../../ui/Button/Button";
import {CommonContext} from "../../pages/Layout/Layout";

const PasswordPopup = () => {
    const [passwordInputs, setPassInputs] = useState({
        current: '',
        new: '',
        newRepeat: ''
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setPassInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const {passPopup, setPassPopup} = useContext(CommonContext);

    return (
        <div className="password-popup" style={{display: passPopup}}>
            <h1 className="h2">Смена пароля</h1>
            <div className="password-popup__content">
                <form className="inputs">
                    <input type="password"
                           className="body"
                           onChange={handleDataChange}
                           placeholder="Текущий пароль"
                           name="current-password"/>
                    <input type="password"
                           className="body"
                           onChange={handleDataChange}
                           placeholder="Новый пароль"
                           name="new-password"/>
                    <input type="password"
                           className="body"
                           onChange={handleDataChange}
                           placeholder="Повторите новый пароль"
                           name="new-password-repeat"/>
                    <Button bgColor={'#494799'} name={'Сохранить'} />
                </form>
                <div className="close-btn" onClick={() => setPassPopup('none')}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292845 12.2929C-0.0976798 12.6835 -0.0976789 13.3166 0.292845 13.7072C0.68337 14.0977 1.31653 14.0977 1.70706 13.7072L0.292845 12.2929ZM13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L13.7071 1.70711ZM12.2929 0.292893L0.292845 12.2929L1.70706 13.7072L13.7071 1.70711L12.2929 0.292893Z" fill="white"/>
                        <path d="M1.70706 0.292846C1.31653 -0.0976789 0.683369 -0.0976778 0.292844 0.292846C-0.0976799 0.683371 -0.0976808 1.31653 0.292844 1.70706L1.70706 0.292846ZM12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L12.2929 13.7071ZM13.7071 12.2929L1.70706 0.292846L0.292844 1.70706L12.2929 13.7071L13.7071 12.2929Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PasswordPopup;