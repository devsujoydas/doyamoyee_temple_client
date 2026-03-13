import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import LoadingScreen from '../components/LoadingScreen';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {

    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        document.body.style.fontFamily =
            i18n.language === "bn"
                ? '"Hind Siliguri", sans-serif'
                // ? '"Noto Sans Bengali", sans-serif'
                : '"Inter", sans-serif';

        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    setTimeout(() => {
        setLoading(false)
    }, 500);
// bg-linear-to-b from-[#fffaf3] via-[#f7e6d3] to-[#f1dcc6]
    return (
        <div className=''>
            {loading ?
                <LoadingScreen />
                :
                <div>
                    <Header />
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    <Outlet />
                    <Footer />
                </div>
            }
        </div>
    )
}

export default MainLayout