import { useNavigate } from "react-router-dom";
import SearchBar from "./SerarchBar";
import ProductList from "./ProductList";
import { useState } from "react";
import Dropdown from "./DropDown";
import Logo from '../Img/Logo.jpg'
import '../UI/Header.css'
import '../UI/DashBoard.css'
import Header from "./welcomePageComp/Header";
import CartModal from "./CartModal";




function DashBoard() {
    const [searchText, setSearchText] = useState('')
    const [dropDownSelectedValues, setDropDownSelectedValues] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])





    const options = [
        { value: "men's clothing", label: "men's clothing" },
        { value: "women's clothing", label: "women's clothing" },
        { value: "electronics", label: "electronics" },
        { value: "jewelery", label: "jewelery" },
    ]


    return (
        <>
            <div className="main-container">
                <Header />

                <div className="div-container">

                    <Dropdown isMulti isSearchable placeHolder='Categories' options={options} onChange={(value) => setDropDownSelectedValues(value)} />




                    <SearchBar searchText={searchText} setSearchText={setSearchText} />


                </div>


                <ProductList searchText={searchText} dropDownSelectedValues={dropDownSelectedValues} selectedProducts={selectedProducts} />


            </div>

        </>
    )

}

export default DashBoard