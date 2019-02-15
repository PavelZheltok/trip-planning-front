import React from "react";
import TripMenu from './menu';
import LoginPage from './auth/login';


const LoginComponent = () => {
    return (
        <>
            <TripMenu/>
            <LoginPage/>
        </>
    )
};

export  default  LoginComponent;