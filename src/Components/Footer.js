import '../UI/Footer.css'
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYahoo } from 'react-icons/fa';
import Logo from '../Img/Logo.jpg'


function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <div className='footer-container'>
                    <div className='logo-address-conatiner'>
                        <div className='logo-footer'>
                            <img className='img-logo-footer' src={Logo} alt={Logo} />
                        </div>
                        <div className='adress-section'>

                            <a>3538 Torrance Blvd, Torrance, CA 90503, USA</a>
                            <a>+1 123 456 7890</a>
                            <a>info@example.com</a>
                        </div>
                    </div>
                    <div className='links-container'>
                        <h2 className='footer-title'>Useful Links</h2>
                        <nav className='links-footer-conainter'>
                            <NavLink className='nav-link' to="/" >
                                Home
                            </NavLink>

                            <NavLink className='nav-link' to="/products" >
                                Products
                            </NavLink>

                            <NavLink className='nav-link' to="/about-us" >
                                About us
                            </NavLink>
                        </nav>
                    </div>
                    <div className='products-category-container'>

                        <h2 className='footer-title'>Products</h2>
                        <div className='products-category'>

                            <a>Men's clothes</a>
                            <a>Women's clothes</a>
                            <a>Jewelry</a>
                            <a>Electronics</a>
                        </div>
                    </div>


                    <div className='stay-in-touch-container'>
                        <h2 className='footer-title'>Stay In Touch</h2>
                        <p className='desc-stayintouch'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='footer-socials'>
                            <span className='social-icon'>
                                <FaFacebook />
                            </span>
                            <span className='social-icon'>
                                <FaInstagram />
                            </span>
                            <span className='social-icon'>
                                <FaTwitter />
                            </span>
                            <span className='social-icon'>
                                <FaYahoo />
                            </span>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Footer