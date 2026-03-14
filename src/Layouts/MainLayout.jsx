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
        const currentLang = i18n.language;
        document.documentElement.lang = currentLang;

        // বডি থেকে পুরানো ল্যাঙ্গুয়েজ ক্লাস রিমুভ করে নতুনটা অ্যাড করা
        document.body.classList.remove('lang-bn', 'lang-en');
        document.body.classList.add(`lang-${currentLang}`);
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