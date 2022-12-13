import Home from "./Home-Page/Component/Home/Home";
import {Route, Routes, Link } from "react-router-dom"
// import SearchBar from "./Home-Page/Component/Home/Search-bar/Search-bar";
import FilterContainner from "./Home-Page/Data-Container/filter"
import SpellCard from "./Home-Page/Data-Container/Spell"
// import TrapCard from "./Home-Page/Data-Container/Trap"
import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App(){

// Get Yukioh API
  const [card , setCard] = useState()

  useEffect(()=>{
    const api = "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster"
    axios.get(api)
    .then(res =>{
      setCard(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  const typeTag =[ 
  {value :"01Aqua	", label:"	Aqua	"},
  {value :"02Beast	", label:"	Beast	"},
  {value :"03Beast-Warrior	", label:"	Beast-Warrior	"},
  {value :"04Creator-God	", label:"	Creator-God	"},
  {value :"05Cyberse	", label:"	Cyberse	"},
  {value :"06Dinosaur	", label:"	Dinosaur	"},
  {value :"07Divine-Beast	", label:"	Divine-Beast	"},
  {value :"08Dragon	", label:"	Dragon	"},
  {value :"09Fairy	", label:"	Fairy	"},
  {value :"10Fiend	", label:"	Fiend	"},
  {value :"11Fish	", label:"	Fish	"},
  {value :"12Insect	", label:"	Insect	"},
  {value :"13Machine	", label:"	Machine	"},
  {value :"14Plant	", label:"	Plant	"},
  {value :"15Psychic	", label:"	Psychic	"},
  {value :"16Pyro	", label:"	Pyro	"},
  {value :"17Reptile	", label:"	Reptile	"},
  {value :"18Rock	", label:"	Rock	"},
  {value :"19Sea Serpent	", label:"	Sea Serpent	"},
  {value :"20Spellcaster	", label:"	Spellcaster	"},
  {value :"21Thunder	", label:"	Thunder	"},
  {value :"22Warrior	", label:"	Warrior	"},
  {value :"23Winged Beast	", label:"	Winged Beast	"},
  {value :"24Wyrm	", label:"	Wyrm	"},
  {value :"25Zombie	", label:"	Zombie	"},
  {value :"26Normal	", label:"	Normal	"},
  {value :"27Field	", label:"	Field	"},
  {value :"28Equip	", label:"	Equip	"},
  {value :"29Continuous	", label:"	Continuous	"},
  {value :"30Quick-Play	", label:"	Quick-Play	"},
  {value :"31Ritual	", label:"	Ritual	"},
  {value :"32Normal	", label:"	Normal	"},
  {value :"33Continuous	", label:"	Continuous	"},
  {value :"34Counter	", label:"	Counter	"}
]

    return (
    <div>
      <nav>
          <Link to= "/ ">
          <img
            src="https://e7.pngegg.com/pngimages/396/1000/png-clipart-symbol-yu-gi-oh-logo-number-unity-games-miscellaneous-emblem.png"
            alt=""
          />
          </Link>         
          <Link to= "/CardInfo "><h3>Card Infomation</h3></Link>
      </nav>

      <main>
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path="/CardInfo" element={<SpellCard data = {card}/>}/>           
        </Routes>

        <div className="App">
          <FilterContainner isSearchable isMulti placeHolder="Type..." options={typeTag} 
                          onChange={(value) => console.log(value)}
          />
        </div>
        
      </main>


    </div>
    )
    
  }
  
  export default App;
  
  /* <div>
  <nav>
          <img
            src="https://e7.pngegg.com/pngimages/396/1000/png-clipart-symbol-yu-gi-oh-logo-number-unity-games-miscellaneous-emblem.png"
            alt=""
          />
          <h1>YuGi Card Library</h1>
          </Link>
          <Link to= "/Trap "><h3>Trap</h3></Link>
          <SearchBar/>
        </nav>

        <main>
          <Routes>
            <Route path = "/Monster" element ={<MonsterCard data = {data} />} />
            <Route path = "/Spell" element ={<SpellCard data = {data}/>} />
            <Route path = "/Magic" element ={<Navigate to ="/Spell" />} />
            <Route path = "/Trap" element ={<TrapCard data = {data} />} />
          </Routes>
        </main>

      </div> */
 
