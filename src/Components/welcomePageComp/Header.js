import React from "react"
import { useNavigate } from "react-router-dom";
import Logo from '../../Img/Logo.jpg'


function Header() {

    const navigate = useNavigate()


    const goToLoginPage = () => {
        navigate('/login')
    }
    const goToSignUpPage = () => {
        navigate('/sign-up')
    }


    return (
        <>
            <div className="container">

                <div className="div-header">

                    <div>
                        <img className="div-svg" src={Logo} alt={Logo} />
                    </div>
                    <div>
                        <div className="btn-container">
                            <button className="btn-header" type='button' onClick={goToLoginPage}>Login</button>

                            <button className="btn-header" type='button' onClick={goToSignUpPage}>SignUp</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Header