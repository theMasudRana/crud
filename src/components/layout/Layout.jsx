import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ContactContextProvider from '../../provider/contactProvider';


function Layout() {
    return (
        <ContactContextProvider>
            <Header />
            <Outlet />
            <Footer />
        </ContactContextProvider>
    )
}

export default Layout