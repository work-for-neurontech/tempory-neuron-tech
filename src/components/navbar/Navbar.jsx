import React from 'react'
import "./navbar.css";
import Logo from "../../assets/images/logo2.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="brand-logo">
                <a className='link' href="/">
                    <img src={Logo} alt="" />
                </a>
                <div className="logo-name">
                    <span>NeuronTech</span>
                </div>
            </div>
            <div className="nav-list">
                <ul className="list">
                    <li className='list-item'><a className='link' href="/">Home</a></li>
                    <li className='list-item'><a className='link' href="/">Our Services</a></li>
                    <li className='list-item'><a className='link' href="/">About</a></li>
                    <li className='list-item'><a className='link' href="/">Contact</a></li>
                    <li className='list-item btn'><a className='link' href="/"><button>Contact Us</button></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
