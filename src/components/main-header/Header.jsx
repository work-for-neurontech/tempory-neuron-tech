import React from 'react'
import "./header.css"
import "./headerPhone.css"
import Headerimg from "../../assets/images/header3.png"
const Header = () => {
    return (
        <div className='main-header'>
            <div className="header-text">
                <p className='slogan'>Transforming Ideas into Digital Success.
                </p>
                <p className='sub-heading'>Empowering business with innovative digital solutions for success.
                </p>
                <button className='btn'>Learn how<i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="header-img">
                <img src={Headerimg} alt="" />
            </div>
        </div>
    )
}

export default Header
