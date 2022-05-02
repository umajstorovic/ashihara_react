import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import AuthForm from "./pages/AuthForm";
import {AuthContextProvider} from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <BrowserRouter>
            <AuthForm/>
        </BrowserRouter>
    </AuthContextProvider>
);
