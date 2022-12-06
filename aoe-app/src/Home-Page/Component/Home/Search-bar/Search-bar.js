// Create search bar

import { useState } from "react";

const SearchBar = ()=>{

    const [searchValue, setSearch] =useState("")

    const inputSearch = (event) => {
        setSearch(event.target.value)
      }

    const saveValue =(event)=>{
        event.preventDefault()
        const textData = {
            text : searchValue
        }
        console.log (textData)
        setSearch("")
    }
    
    return(

        <form>
            <div className="search-bar">
                <input type="text" placeholder="find your card" onChange={inputSearch} />
                <button onClick={saveValue}>search</button>
            </div>
        </form>
)}
export default SearchBar