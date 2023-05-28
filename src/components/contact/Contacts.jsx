import React from 'react'
import "./contact.css"
const Contacts = ({ id }) => {
    return (
        <div className='contact' id={id}>
            <h2 className='heading mt'>CONTACT</h2>
            <p className='service-para'>Contact us</p>
            <div className="contact-info">
                <div className="info">
                    <i class=" contact-icon fa-regular fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p><a href="mailto:contact@neuronTech.in">contact@neuronTech.in</a></p>
                    <p><a href="mailto:contact@neuronTech.in">contact@neuronTech.in</a></p>
                    <p><a href="mailto:contact@neuronTech.in">contact@neuronTech.in</a></p>
                </div>
                <div className="number">
                    <button className='btn-primary'><i class="fa-solid fa-phone"></i><a className='tele' href="tel:7409204678">+917409204678</a></button>
                    <button className='phone-btn'><i class="fa-solid fa-phone"></i><a className='telep' href="tel:7409204678">Call Us</a></button>
                </div>
            </div>
        </div>
    )
}

export default Contacts
