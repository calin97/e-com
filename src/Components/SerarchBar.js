import { useState } from "react";
import '../UI/SearchBar.css'


function SearchBar({ searchText, setSearchText }) {



    const searchBarHandler = (e) => {
        setSearchText(e.target.value)
    }



    return (
        <>

            <div>
                <input class="search__input" type="text" placeholder="Search" onChange={searchBarHandler} value={searchText} />
            </div>



            {/* <div >
                <div>
                    <input className="input" type="text" placeholder="type to search" onChange={searchBarHandler} value={searchText} />
                </div>
                <span></span>
            </div> */}
        </>
    )

}

export default SearchBar;