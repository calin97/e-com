import React, { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom";
import Logo from '../../Img/Logo.jpg'
import HeaderCartButton from "../HeaderCartButton";
import CartModal from "../CartModal";
import '../../UI/Header.css'


function Header({ selectedProducts }) {
    const [isCartVisible, setIsCartVisible] = useState(false)


    const navigate = useNavigate()


    const goToLoginPage = () => {
        navigate('/login')
    }
    const goToSignUpPage = () => {
        navigate('/sign-up')

    }

    const backToWelcomePage = () => {
        navigate('/')
        localStorage.removeItem("account")
    }


    const username = JSON.parse(localStorage.getItem("account"))


    return (
        <>

            {isCartVisible && <CartModal selectedProducts={selectedProducts} setIsCartVisible={setIsCartVisible} />}

            <div className="header-container">
                <div className="container-default header-wrapper">

                    <div className="div-header-left">

                        <div>
                            <img className="div-svg" src={Logo} alt={Logo} />
                        </div>


                        <div>

                            <nav className='nav-link-container'>

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

                    </div>

                    <div className="div-header-right">

                        {username ?
                            //logged IN


                            <>
                                <HeaderCartButton className="btn-cart" setIsCartVisible={setIsCartVisible} />
                                <div className="btn-container">
                                    <button className="btn-header" type="button" onClick={backToWelcomePage}>LogOut</button>
                                </div>

                            </>


                            :

                            //LOGGED OUT
                            <>
                                {/* <div>welcome, {username}</div> */}


                                <div className="btn-container">
                                    <button className="btn-header" type='button' onClick={goToLoginPage}>Login</button>

                                    <button className="btn-header" type='button' onClick={goToSignUpPage}>SignUp</button>
                                </div>

                            </>
                        }
                    </div>

                </div>
            </div>

        </>
    )

}

export default Header

