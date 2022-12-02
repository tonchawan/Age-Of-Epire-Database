import Home from "./Home-Page/Component/Home/Home";
import "./App.css";
import {Route, Routes, Link} from "react-router-dom"
import { useState } from "react";
import React from "react";

function App(){
  const [price, setPrice] = useState()

    return (
      <div>
        <nav>
          <Link to= "/ ">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin prices</h1>
          </Link>

        </nav>

        <main>
          <Routes>
            <Route path = "/" element ={<Home />} />
          </Routes>
        </main>

      </div>
    );
}

export default App;
