import React from 'react'
import Logo from "../../assets/images/logo2.png"
import "./footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-item">
                <div className="brand-logo">
                    <a className='link' href="/">
                        <img src={Logo} alt="" />
                    </a>
                    <div className="logo-name">
                        <span>NeuronTech</span>
                    </div>
                </div>
                <div className="footer-info">
                    <h2>Contact</h2>
                    <p><a href="mailto:contact@neuronTech.in">contact@neuronTech.in</a></p>
                </div>
            </div>
            <div className="social-icon">
                <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="/"><i class="fa-brands fa-instagram"></i></a>
                <a href="/"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="copyright">
                <p>© Copyright <span>NeuronTech Private Limited.</span> All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
