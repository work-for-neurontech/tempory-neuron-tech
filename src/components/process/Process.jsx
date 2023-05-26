import React from 'react'
import "./process.css"
import "./phoneProcess.css"
import Img1 from "../../assets/images/p1.png"
import Img2 from "../../assets/images/p2.png"
import Img3 from "../../assets/images/p3.png"
import Img4 from "../../assets/images/p4.png"
const Process = () => {
    return (
        <div className='process'>
            <p className='service-text'>Process</p>
            <div className="images">
                <div className="image">
                    <img src={Img1} alt="" />
                    <h3>Ideation and Wireframe</h3>
                </div>
                <div className="image">
                    <img src={Img2} alt="" />
                    <h3>User Experience Design</h3>
                </div>
                <div className="image">
                    <img src={Img3} alt="" />
                    <h3>Product Development</h3>
                </div>
                <div className="image">
                    <img src={Img4} alt="" />
                    <h3>Testing - QA</h3>
                </div>
            </div>
            <p className='out-para'>We transform your ideas into reality. First, we map out the design flow and create wireframes. Next, we craft a user experience that engages and captivates. Then, our team develops your product with precision and care. Finally, we conduct thorough testing and quality assurance to ensure a polished and seamless outcome.</p>
        </div>
    )
}

export default Process
