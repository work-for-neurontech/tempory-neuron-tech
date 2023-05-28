import React from 'react'
import "./services.css"
import "./phoneService.css"
import Img1 from "../../assets/images/s1.png"
import Img2 from "../../assets/images/s2.png"
import Img3 from "../../assets/images/s3.png"
import Img4 from "../../assets/images/s4.png"
const Services = ({ id }) => {
    return (
        <div id={id}>
            <div className='services'>
                <h2 className='heading'>Our Services</h2>
                <p className='service-text'>Here's what we offer</p>
                <div className="services-images">
                    <div className="image">
                        <img src={Img1} alt="" />
                        <h3>Dynamic Website</h3>
                        <p>We'll cover it all! From researching content ideas to publishing the videos and everything in between</p>
                    </div>
                    <div className="image">
                        <img src={Img2} alt="" />
                        <h3>Website Design</h3>
                        <p>We'll cover it all! From researching content ideas to publishing the videos and everything in between</p>
                    </div>
                    <div className="image">
                        <img src={Img3} alt="" />
                        <h3> E-commmerce Website</h3>
                        <p>We'll cover it all! From researching content ideas to publishing the videos and everything in between</p>
                    </div>
                    <div className="image">
                        <img src={Img4} alt="" />
                        <h3>Landing pages</h3>
                        <p>We'll cover it all! From researching content ideas to publishing the videos and everything in between</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
