import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../../pages/Footer/Footer';
//import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;