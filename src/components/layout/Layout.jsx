import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ContactContext from '../../context/ContactContext';
import { useState } from 'react';


function Layout() {

    const [theme, setTheme] = useState('light')

    return (
        <ContactContext.Provider value={theme}>
            <Header />
            <label>
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={(e) => {
                        setTheme(
                            e.target.checked ? 'dark' : 'light'
                        )
                    }}
                />
                Use Dark Theme
            </label>
            <Outlet />
            <Footer />
        </ContactContext.Provider>
    )
}

export default Layout