import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
const Layout = () => {

    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        document.body.style.fontFamily =
            i18n.language === "bn"
                // ? '"Hind Siliguri", sans-serif'
                ? '"Noto Sans Bengali", sans-serif'
                : '"Playfair Display", sans-serif';

        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    setTimeout(() => {
        setLoading(false)
    }, 500);

    return (
        <div className=''>
            {loading ?
                <LoadingScreen />
                :
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            }
        </div>
    )
}

export default Layout