import React from 'react'
import "./gettouch.css"
const Gettouch = () => {
    return (
        <div className='get-touch'>
            <h4>Get in touch</h4>
            <p>Want to know how we can help your brand stand out? Let's discuss!</p>
            {/* <button className='btn'>Contact Us</button> */}
            <button> <a className='link' rel="noreferrer" href="https://forms.gle/97xwW1Sh3qM9m3DX6" target='_blank'>Contact Us</a></button>
        </div>
    )
}

export default Gettouch
