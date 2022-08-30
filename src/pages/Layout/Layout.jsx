import {useState, createContext, useEffect} from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../components/Header/Header";

import '../../styles/default.css';
import PopUp from "../../components/PopUp/PopUp";
import Footer from "../../components/Footer/Footer";
import PasswordPopup from "../../components/PasswordPopup/PasswordPopup";
import EmailPopup from "../../components/EmailPopup/EmailPopup";

export const CommonContext = createContext({
    currentFilter: 'По умолчанию',
    currentOS: 'Все',
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    currentDisplayStyle: 'none',
    passPopup: 'none',
    emailPopup: 'none',
    user: {},
    setCurrentFilter: () => {},
    setCurrentOS: () => {},
    setCartItems: () => {},
    setCurrentDisplayStyle: () => {},
    setPassPopup: () => {},
    setEmailPopup: () => {},
    setUser: () => {}
});

const Layout = () => {
    // фильтрация
    const [currentFilter, setCurrentFilter] = useState('По умолчанию');
    const [currentOS, setCurrentOS] = useState('Все');

    // корзина в local storage
    const [cartItems, setCartItems] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    // показать/спрятать popup
    const [currentDisplayStyle, setCurrentDisplayStyle] = useState('none');
    const [passPopup, setPassPopup] = useState('none');
    const [emailPopup, setEmailPopup] = useState('none');

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {});

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);

    const value = {
        currentFilter, setCurrentFilter,
        currentOS, setCurrentOS,
        cartItems, setCartItems,
        currentDisplayStyle, setCurrentDisplayStyle,
        passPopup, setPassPopup,
        emailPopup, setEmailPopup,
        user, setUser
    };

    return (
        <CommonContext.Provider value={value} >
            <Header />
            <main>
                <Outlet />
            </main>
            {/* popup windows – глобальные, чтобы менялся
            стиль header + body при появлении */}
            <PopUp />
            <PasswordPopup/>
            <EmailPopup />
            <Footer />
        </CommonContext.Provider>
    )
}

export {Layout}