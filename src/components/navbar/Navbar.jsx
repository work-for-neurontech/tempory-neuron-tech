import React, { useEffect, useState } from 'react'
import "./navbar.css";
import "./navPhone.css";
import Logo from "../../assets/images/logo2.png"
import { Link } from "react-scroll";
const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
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
            windowHeight > 10 ? setStickyClass('sticky-nav bg-color') : setStickyClass('');
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.matchMedia('(max-width: 767px)').matches;
            setIsMenuOpen(!isMobile); // Invert the value for mobile devices
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`navbar ${stickyClass}`}>
            <div className="brand-logo">
                <Link className='link' href="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className="logo-name">
                    <span>NeuronTech</span>
                </div>
                <div className="menu-icon">
                    <i class="fa-solid fa-bars" onClick={handleMenuClick}></i>
                </div>
            </div>
            {(isMenuOpen || window.innerWidth >= 768) && (<div className="nav-list">
                <ul className="list">
                    <li className='list-item'><Link className='link' to="header" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100} onClick={handleMenuClick}>Home</Link></li>
                    <li className='list-item'><Link className='link' to="service-part" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} onClick={handleMenuClick}>Our Services</Link></li>
                    <li className='list-item'><Link className='link' to="process-part" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} onClick={handleMenuClick}>Process</Link></li>
                    <li className='list-item'><Link className='link' to="contact-part" spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} onClick={handleMenuClick}>Contact</Link></li>
                    <li className='list-item btn'><a className='link' href="https://forms.gle/97xwW1Sh3qM9m3DX6" target='_blank' rel="noreferrer"><button>Contact Us</button></a></li>
                </ul>
            </div>
            )}
        </div>
    )
}

export default Navbar
