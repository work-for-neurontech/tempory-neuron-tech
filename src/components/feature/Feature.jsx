import React from 'react'
import "./feature.css"
import "./featurePhone.css"
import Fimg from "../../assets/images/featureimg.png"
const Feature = () => {
    return (
        <div className='feature '>
            <p className='feature-text-head'>Here's why you should work with us</p>
            <div className="feature-content">
                <div className="feature-img">
                    <img src={Fimg} alt="" />
                </div>
                <div className="feature-info">
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-code icon-box"></i>
                            Expertise</h4>
                        <p className='feature-para'>Our experienced team excels in creating stunning and functional websites.</p>
                    </div>
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-gear icon-box"></i>Customization</h4>
                        <p className='feature-para'>We tailor every aspect of the design to match your unique brand.</p>
                    </div>
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-user icon-box"></i>User-Centric Approach</h4>
                        <p className='feature-para'>Our designs prioritize user experience to maximize engagement.</p>
                    </div>
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-mobile-screen-button icon-box"></i>Responsive Design</h4>
                        <p className='feature-para'>We ensure your website looks and functions flawlessly across devices.</p>
                    </div>
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-chart-line icon-box"></i>SEO Optimization:</h4>
                        <p className='feature-para'>Our designs are optimized to improve visibility and organic traffic.</p>
                    </div>
                    <div className="feature-text">
                        <h4 className='feature-heading'>
                            <i class="fa-solid fa-truck-arrow-right icon-box"></i>Timely Delivery</h4>
                        <p className='feature-para'>We adhere to deadlines, ensuring your website is launched promptly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
