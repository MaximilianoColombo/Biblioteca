// components/Layout.js
import React from 'react';
import Footer from './Footer.jsx';
import NavBar from './NavBar.jsx';

const Layout = ({ children }) => {

    const backgroundStyle = {
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
    };

    const blackBackground = {
        position: 'absolute',
        top: '0', left:'0', right:'0', bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    return (
        <div data-bs-theme="dark" style={backgroundStyle}>
            <NavBar />
            <div style={blackBackground}> 
                <main style={{ zIndex: 1 }} className='p-5'>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
