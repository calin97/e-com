import React, { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom";
import Logo from '../../Img/Logo.jpg'


function Header() {


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





    // conditional DISPLAY HEADER!!!!!!!!!!!!






    return (
        <>


            <div className="header-container">

                <div className="div-header">

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

                    {username ?
                        //logged IN


                        <div className="btn-container">
                            <button className="btn-header" type="button" onClick={backToWelcomePage}>LogOut</button>
                        </div>



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

        </>
    )

}

export default Header

