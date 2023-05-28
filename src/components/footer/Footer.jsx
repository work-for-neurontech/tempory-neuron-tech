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
                    <p><a href="mailto:contact@neuronTech.in" rel="noopener">contact@neuronTech.in</a></p>
                </div>
            </div>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/neuron-tech-56b373278"><i class="fa-brands fa-linkedin" rel="noreferrer" target='_blank'></i></a>
                <a href="https://www.instagram.com/neurontechindia/"><i class="fa-brands fa-instagram" rel="noreferrer" target='_blank'></i></a>
                <a href="https://twitter.com/NeuronTechIndia"><i class="fa-brands fa-twitter" rel="noreferrer" target='_blank'></i></a>
                <a href="https://www.facebook.com/115514294881869/posts/115518484881450/?mibextid=rS40aB7S9Ucbxw6v" rel="noreferrer" target='_blank'><i class="fa-brands fa-square-facebook"></i></a>
            </div>
            <div className="copyright">
                <p>© Copyright <span>NeuronTech Private Limited.</span> All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
