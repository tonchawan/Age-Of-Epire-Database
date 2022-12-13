import Home from "./Home-Page/Component/Home/Home";
import {Route, Routes, Link, useNavigate} from "react-router-dom"
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
  const [race , setRace] = useState("")

  const searchRace = ()=>{
    const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?race=${race}`
  axios.get(api)
  .then(res =>{
    console.log("get data")
    setCard(res.data.data)
    // const navigate = useNavigate()
    // navigate("/CardInfo")

  })
  .catch(err =>{
    console.log(err)
  }) 
  }
    
  useEffect(()=>{
    searchRace()
  }, [race])

  const cardRace =[ 
  {value :"Aqua	", label:"	Aqua	"},
  {value :"Beast	", label:"	Beast	"},
  {value :"Beast%20Warrior	", label:"	Beast-Warrior	"},
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

const cardType = []

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
          <FilterContainner isSearchable isMulti placeHolder="Race..." options={cardRace} 
                          onChange={(value) => setRace(value[0].label)}
          />
          {/* <FilterContainner isSearchable isMulti placeHolder="Type..." options={cardType} 
                          onChange={(value) => console.log(value)} */}
          {/* /> */}
        </div>
        
      </main>


    </div>
    )
    
  }
  
  export default App