import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthForm from "./pages/AuthForm";
import {AuthContextProvider} from "./store/auth-context";
import HomeForm from "./pages/HomeForm";
import AddCompetitorPage from "./pages/AddCompetitorForm";
import * as routes from "./const/Routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path={routes.auth_route} element={<AuthForm/>}/>
                <Route path={routes.home_route} element={<HomeForm/>}/>
                <Route path={routes.add_competitor_route} element={<AddCompetitorPage/>}/>
            </Routes>
        </BrowserRouter>
    </AuthContextProvider>
);
