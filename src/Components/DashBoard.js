import { useNavigate } from "react-router-dom";
import SearchBar from "./SerarchBar";
import ProductList from "./ProductList";
import { useState } from "react";
import Dropdown from "./DropDown";
import Logo from '../Img/Logo.jpg'
import '../UI/Header.css'



function DashBoard() {
    const [searchText, setSearchText] = useState('')
    const [dropDownSelectedValues, setDropDownSelectedValues] = useState([])
    const navigate = useNavigate()


    const backToWelcomePage = () => {
        navigate('/')
    }

    const options = [
        { value: "men's clothing", label: "men's clothing" },
        { value: "women's clothing", label: "women's clothing" },
        { value: "electronics", label: "electronics" },
        { value: "jewelery", label: "jewelery" },
    ]


    return (
        <>

            <div className="container">

                <Dropdown className='dropdown' isMulti isSearchable placeHolder={<svg viewBox="0 0 100 80" width="35" height="30">
                    <rect width="75" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>} options={options} onChange={(value) => setDropDownSelectedValues(value)} />
                <div className="div-header">

                    <div>
                        <img className="div-svg" src={Logo} alt={Logo} />
                    </div>


                    <SearchBar searchText={searchText} setSearchText={setSearchText} />
                    <div className="btn-container">
                        <button className="btn-header" type="button" onClick={backToWelcomePage}>LogOut</button>
                    </div>
                </div>
            </div>



            <ProductList searchText={searchText} dropDownSelectedValues={dropDownSelectedValues} />

        </>
    )

}

export default DashBoard