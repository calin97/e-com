
import '../UI/SearchBar.css'


function SearchBar({ searchText, setSearchText }) {



    const searchBarHandler = (e) => {
        setSearchText(e.target.value)
    }



    return (
        <>

            <div>
                <input className="search__input" type="text" placeholder="Search" onChange={searchBarHandler} value={searchText} />
            </div>

        </>
    )

}

export default SearchBar;