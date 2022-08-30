import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Layout} from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import GoodPage from "./pages/GoodPage/GoodPage";
import Cart from "./pages/Cart/Cart";
import Library from "./pages/Library/Library";
import Account from "./pages/Account/Account";
import Page404 from "./pages/Page404/Page404";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Main />} />
                    <Route path=":id" element={<GoodPage />} />
                    <Route path="cart" element={<Cart />}/>
                    <Route path="library" element={<Library />} />
                    <Route path="account" element={<Account />} />
                    <Route path="404" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;