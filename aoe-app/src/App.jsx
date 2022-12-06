import Home from "./Home-Page/Component/Home/Home";
import "./App.css";
import {Route, Routes, Link} from "react-router-dom"
import React from "react";
import DataContainer from "./Home-Page/Data-Container/Data-Container";
import SearchBar from "./Home-Page/Component/Home/Search-bar/Search-bar";

function App(){

    return (
      <div>
        <nav>
          <Link to= "/ ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Age_of_Empires_HD_logo.png"
            alt=""
          />
          <h1>Age Of Emprie Library</h1>
          </Link>
          <SearchBar/>
        </nav>

        <main>
          <Routes>
            <Route path = "/" element ={<Home />} />
          </Routes>
        </main>

        <DataContainer/>
      </div>
 
 );
}

export default App;
