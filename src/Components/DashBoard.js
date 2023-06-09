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
import Footer from "./Footer";




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
            <Header />
            <div className="shopping-products-container">
                <div className="main-dashbord-container container-default">


                    <div className="drop-search-products-wrapper">


                        <div className="drop-search-container">

                            <div className="dropdown-shop-wrapper">

                                <Dropdown isMulti isSearchable placeHolder='Categories' options={options} onChange={(value) => setDropDownSelectedValues(value)} />

                            </div>
                            <div className="search-shop-wrapper">

                                <SearchBar searchText={searchText} setSearchText={setSearchText} />

                            </div>
                        </div>


                        <ProductList searchText={searchText} dropDownSelectedValues={dropDownSelectedValues} selectedProducts={selectedProducts} />
                    </div>




                </div>
            </div>

            <Footer />


        </>
    )

}

export default DashBoard