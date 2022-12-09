// import Home from "./Home-Page/Component/Home/Home";
// import {Route, Routes, Link, Navigate} from "react-router-dom"
// import SearchBar from "./Home-Page/Component/Home/Search-bar/Search-bar";
// import MonsterCard from "./Home-Page/Data-Container/Monster"
// import SpellCard from "./Home-Page/Data-Container/Spell"
// import TrapCard from "./Home-Page/Data-Container/Trap"

import react, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App(){

// Get Yukioh API
  const [card , setCard] = useState()

  useEffect(()=>{
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then(res =>{
      setCard(res.data)
      console.log(res.data[1][1].name)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

    return (
      <div>
        
      </div>
    )
      
}

export default App;

{/* <div>
        <nav>
          <Link to= "/ ">
          <img
            src="https://e7.pngegg.com/pngimages/396/1000/png-clipart-symbol-yu-gi-oh-logo-number-unity-games-miscellaneous-emblem.png"
            alt=""
          />
          <h1>YuGi Card Library</h1>
          </Link>
          <Link to= "/Monster"><h3>Monster</h3></Link>
          <Link to= "/Spell "><h3>Spell</h3></Link>
          <Link to= "/Trap "><h3>Trap</h3></Link>
          <SearchBar/>
        </nav>

        <main>
          <Routes>
            <Route path = "/" element ={<Home />} />
            <Route path = "/Monster" element ={<MonsterCard data = {data} />} />
            <Route path = "/Spell" element ={<SpellCard data = {data}/>} />
            <Route path = "/Magic" element ={<Navigate to ="/Spell" />} />
            <Route path = "/Trap" element ={<TrapCard data = {data} />} />
          </Routes>
        </main>

      </div> */}
 
