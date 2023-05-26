import React, { useEffect, useState } from 'react'
import "./navbar.css";
import "./navPhone.css";
import Logo from "../../assets/images/logo2.png"
const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("clicked");
    };

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 50 ? setStickyClass('sticky-nav bg-color') : setStickyClass('');
        }
    };

    return (
        <div className={`navbar ${stickyClass}`}>
            <div className="brand-logo">
                <a className='link' href="/">
                    <img src={Logo} alt="" />
                </a>
                <div className="logo-name">
                    <span>NeuronTech</span>
                </div>
                <div className="menu-icon">
                    <i class="fa-solid fa-bars" onClick={handleMenuClick}></i>
                </div>
            </div>
            {isMenuOpen && (<div className="nav-list">
                <ul className="list">
                    <li className='list-item'><a className='link' href="/">Home</a></li>
                    <li className='list-item'><a className='link' href="/">Our Services</a></li>
                    <li className='list-item'><a className='link' href="/">Process</a></li>
                    <li className='list-item'><a className='link' href="/">Contact</a></li>
                    <li className='list-item btn'><a className='link' href="/"><button>Contact Us</button></a></li>
                </ul>
            </div>
            )}
        </div>
    )
}

export default Navbar
