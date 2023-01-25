import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../.././src///Pages///Shared///Header///Header'
import Footer from '../../././src////Pages/////Shared//////Footer/Footer'

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;