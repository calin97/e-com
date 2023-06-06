import bodyImg from '../../Img/bodyImg.jpg'
import '../../UI/BodyWelcomePage.css'
import CarouselBody from './CarouselBody'
import { useNavigate } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTwitter, FaYahoo } from 'react-icons/fa';
import lifestyle from '../../Img/lifestyle.jpg'
import '../../Img/Logo.jpg'
import Footer from '../Footer';


function BodyWelcomePage() {

    const navigate = useNavigate()

    const shopNowHandler = () => {
        navigate('/products')
    }
    return (
        <>
            <div className='body-wrapper'>
                {/* FIRST VIEW IN WELCOME PAGE */}
                <img className='background-img' src={bodyImg} alt={bodyImg} />

                <div className='welcome-text-wrapper'>
                    <div className='welcome-text'>
                        <h2 className='smaller-text'>The MixBoutique Store!</h2>
                        <h1>Beautiful life, fashion style!</h1>
                    </div>
                    <button type='button' className='shop-btn' onClick={shopNowHandler}>Shop Now</button>

                </div>

                <div className='bottom-wrapper'>
                    <div className='button-elements'>
                        <div className='scroll-down'>Scroll Down</div>
                        <div className='social-media'>
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


                {/* SECOND VIEW IN WELCOME PAGE */}

                <div className='second-view-container'>
                    <div className='img-text-wrapper'>
                        <div className='image-second-view-container'>
                            <img className='img-second-view' src={lifestyle} alt='lifestyle.jpg'></img>
                        </div>
                        <div className='text-second-view-wrapper'>
                            <div>
                                <div className='text-div-colection'>New-Collection</div>
                                <div className='text-title-desc'>

                                    <h1 className='text-div-title'>A Perfect Set For Your lifestyle</h1>
                                    <div className='text-div-description'>Massa cras egestas laoreet montes, dapibus eu sit etiam curabitur faucibus habitasse lectus vestibulum leo, odio dolor quis maecenas faucibus vulputate pharetra nunc sed maecenas diam quisque habitasse.</div>
                                </div>
                            </div>
                            <button className='text-button-shop'>
                                <a>
                                    shop this collection
                                </a>

                            </button>
                        </div>
                    </div>

                </div>

                {/* why choose us section in second view homepage */}

                <div className='wonder-wrapper'>
                    <div className='wonder-element'>
                        IF YOU WONDER

                    </div>
                    <div className='text-wonder'>
                        Why choose us
                    </div>

                </div>
                <div className='wonder-elements-wrapper'>
                    <div className='element-container'>
                        <figure className='wonder-figure'>
                            <img src='https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-04.png' alt='lazy'></img>
                        </figure>
                        <h6 className='wonder-title'>Big discounts</h6>
                        <p className='wonder-text-desc'>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className='element-container'>
                        <figure className='wonder-figure'>
                            <img src='https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-01.png' alt='lazy'></img>
                        </figure>
                        <h6 className='wonder-title'>Free Shipping</h6>
                        <p className='wonder-text-desc'>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className='element-container'>
                        <figure className='wonder-figure'>
                            <img src='https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-02.png' alt='lazy'></img>
                        </figure>
                        <h6 className='wonder-title'>Secure Payments</h6>
                        <p className='wonder-text-desc'>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>
                    <div className='element-container'>
                        <figure className='wonder-figure'>
                            <img src='https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-03.png' alt='lazy'></img>
                        </figure>
                        <h6 className='wonder-title'>Order Tracking</h6>
                        <p className='wonder-text-desc'>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                    </div>


                </div>

                <Footer />


            </div >




            {/* <div className='carousel-wrapper'>
                        <CarouselBody />
                    </div> */}


        </>
    )

}

export default BodyWelcomePage