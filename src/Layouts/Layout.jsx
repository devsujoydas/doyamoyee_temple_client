import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
const Layout = () => {

    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.style.fontFamily =
            i18n.language === "bn"
                ? '"Hind Siliguri", sans-serif'
                : '"Playfair Display", sans-serif';

        document.documentElement.lang = i18n.language;
    }, [i18n.language]);


    return (
        <div className=''>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout