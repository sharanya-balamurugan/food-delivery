import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis, totam consectetur nulla commodi enim ullam iste quod et harum repellat. Necessitatibus vitae adipisci ut accusantium error eum laudantium doloremque!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>

                        
                        <li>Home</li>


                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Private Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9876543210</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>
            </div>

            <hr />
            <p className="footer-copyrights">Copyright 2025 &copy;Tomato.com -All Right Reserved</p>
        </div>
    )
}

export default Footer