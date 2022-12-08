import Home from "./Home-Page/Component/Home/Home";
import "./App.css";
import {Route, Routes, Link, Navigate} from "react-router-dom"
import React from "react";
import SearchBar from "./Home-Page/Component/Home/Search-bar/Search-bar";
import MonsterCard from "./Home-Page/Data-Container/Monster"
import SpellCard from "./Home-Page/Data-Container/Spell"
import TrapCard from "./Home-Page/Data-Container/Trap"

const data= [
  {
      "id":34541863,
      "name":"\"A\" Cell Breeding Device",
      "type":"Spell Card",
      "desc":"During each of your Standby Phases,put 1 A-Counter on 1 face-up monster your opponent controls.",
      "race":"Continuous",
      "archetype":"Alien",
      "card_sets":
          [{"set_name":"Force of the Breaker","set_code":"FOTB-EN043","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.31"}],
      "card_images":
          [{"id":34541863,
            "image_url":"https://images.ygoprodeck.com/images/cards/34541863.jpg",
            "image_url_small":"https://images.ygoprodeck.com/images/cards_small/34541863.jpg"
          }],
      "card_prices":
          [{"cardmarket_price":"0.10",
              "tcgplayer_price":"0.17",
              "ebay_price":"4.99",
              "amazon_price":"24.45",
              "coolstuffinc_price":"0.25"
              }]
  },
  {
      "id":64163367,
      "name":"\"A\" Cell Incubator",
      "type":"Spell Card",
      "desc":"Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
      "race":"Continuous","archetype":"Alien",
      "card_sets":[{"set_name":"Gladiator's Assault","set_code":"GLAS-EN062","set_rarity":"Common","set_rarity_code":"(C)","set_price":"2.1"}],
      "card_images":[{"id":64163367,"image_url":"https://images.ygoprodeck.com/images/cards/64163367.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/64163367.jpg"}],
      "card_prices":[{"cardmarket_price":"0.13","tcgplayer_price":"0.12","ebay_price":"1.15","amazon_price":"0.50","coolstuffinc_price":"0.25"}]
  },
  {
      "id":91231901,
      "name":"\"A\" Cell Recombination Device",
      "type":"Spell Card",
      "desc":"Target 1 face-up monster on the field; send 1 \"Alien\" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 \"Alien\" monster from your Deck to your hand.",
      "race":"Quick-Play",
      "archetype":"Alien",
      "card_sets":[{"set_name":"Invasion: Vengeance","set_code":"INOV-EN063","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.12"}],
      "card_images":[{"id":91231901,"image_url":"https://images.ygoprodeck.com/images/cards/91231901.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/91231901.jpg"}],
      "card_prices":[{"cardmarket_price":"0.13","tcgplayer_price":"0.22","ebay_price":"0.99","amazon_price":"0.50","coolstuffinc_price":"0.49"}]
  },
  {
      "id":73262676,
      "name":"\"A\" Cell Scatter Burst",
      "type":"Spell Card",
      "desc":"Select 1 face-up \"Alien\" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent's face-up monsters.",
      "race":"Quick-Play",
      "archetype":"Alien",
      "card_sets":[{"set_name":"Strike of Neos","set_code":"STON-EN041","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.13"}],
      "card_images":[{"id":73262676,"image_url":"https://images.ygoprodeck.com/images/cards/73262676.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/73262676.jpg"}],
      "card_prices":[{"cardmarket_price":"0.15","tcgplayer_price":"0.11","ebay_price":"0.99","amazon_price":"9.76","coolstuffinc_price":"0.25"}]
  },
  {
      "id":37478723,
      "name":"\"Infernoble Arms - Durendal\"",
      "type":"Spell Card",
      "desc":"While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 \"\"Infernoble Arms - Durendal\"\" effect per turn, and only once that turn.",
      "race":"Equip",
      "archetype":"Noble Knight",
      "card_sets":[{"set_name":"2021 Tin of Ancient Battles","set_code":"MP21-EN136","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"0.94"},{"set_name":"Rise of the Duelist","set_code":"ROTD-EN053","set_rarity":"Ultra Rare","set_rarity_code":"(UR)","set_price":"5.35"}],
      "card_images":[{"id":37478723,"image_url":"https://images.ygoprodeck.com/images/cards/37478723.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/37478723.jpg"}],
      "card_prices":[{"cardmarket_price":"0.28","tcgplayer_price":"0.23","ebay_price":"0.99","amazon_price":"2.96","coolstuffinc_price":"0.00"}]
  },
  {
      "id":64867422,
      "name":"\"Infernoble Arms - Hauteclere\"",
      "type":"Spell Card","desc":"While this card is equipped to a monster: You can target 1 face-up monster you control; this turn, you cannot declare attacks, except with that monster, also it gains the ability this turn to make a second attack during each Battle Phase, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 face-up monster on the field; destroy it. You can only use 1 \"\"Infernoble Arms - Hauteclere\"\" effect per turn, and only once that turn.","race":"Equip","archetype":"Noble Knight","card_sets":[{"set_name":"2021 Tin of Ancient Battles","set_code":"MP21-EN137","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"0.93"},{"set_name":"Rise of the Duelist","set_code":"ROTD-EN054","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.04"}],"card_images":[{"id":64867422,"image_url":"https://images.ygoprodeck.com/images/cards/64867422.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/64867422.jpg"}],"card_prices":[{"cardmarket_price":"0.10","tcgplayer_price":"0.05","ebay_price":"1.00","amazon_price":"0.25","coolstuffinc_price":"0.00"}]},{"id":90861137,"name":"\"Infernoble Arms - Joyeuse\"","type":"Spell Card","desc":"While this card is equipped to a monster: You can target 1 FIRE Warrior monster in your GY; add it to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can Special Summon 1 FIRE Warrior monster from your hand. You can only use 1 \"\"Infernoble Arms - Joyeuse\"\" effect per turn, and only once that turn.","race":"Equip","archetype":"Noble Knight","card_sets":[{"set_name":"2021 Tin of Ancient Battles","set_code":"MP21-EN138","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"1.08"},{"set_name":"Rise of the Duelist","set_code":"ROTD-EN055","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"1.4"}],"card_images":[{"id":90861137,"image_url":"https://images.ygoprodeck.com/images/cards/90861137.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/90861137.jpg"}],"card_prices":[{"cardmarket_price":"0.09","tcgplayer_price":"0.10","ebay_price":"0.99","amazon_price":"0.45","coolstuffinc_price":"0.00"}]},
{
  "id":44256816,
  "name":"1st Movement Solo","type":"Spell Card","desc":"If you control no monsters: Special Summon 1 Level 4 or lower \"Melodious\" monster from your hand or Deck. You can only activate 1 \"1st Movement Solo\" per turn. You cannot Special Summon monsters during the turn you activate this card, except \"Melodious\" monsters.","race":"Normal","archetype":"Melodious","card_sets":[{"set_name":"2015 Mega-Tin Mega Pack","set_code":"MP15-EN169","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"2.99"},{"set_name":"The New Challengers","set_code":"NECH-EN059","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"3.04"},{"set_name":"The New Challengers: Super Edition","set_code":"NECH-ENS10","set_rarity":"Super Rare","set_rarity_code":"(SR)","set_price":"17.04"}],"card_images":[{"id":44256816,"image_url":"https://images.ygoprodeck.com/images/cards/44256816.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/44256816.jpg"}],"card_prices":[{"cardmarket_price":"9.35","tcgplayer_price":"1.67","ebay_price":"2.99","amazon_price":"2.19","coolstuffinc_price":"1.99"}]},
{
  "id":86988864,
  "name":"3-Hump Lacooda",
  "type":"Effect Monster",
  "desc":"If there are 3 face-up \"3-Hump Lacooda\" cards on your side of the field, Tribute 2 of them to draw 3 cards.",
  "atk":500,
  "def":1500,
  "level":3,
  "race":"Beast",
  "attribute":"EARTH",
  "card_sets":[{"set_name":"Ancient Sanctuary","set_code":"AST-070","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.07"},{"set_name":"Dark Revelation Volume 2","set_code":"DR2-EN183","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.24"}],
  "card_images":[{"id":86988864,"image_url":"https://images.ygoprodeck.com/images/cards/86988864.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/86988864.jpg"}],
  "card_prices":[{"cardmarket_price":"0.11","tcgplayer_price":"0.24","ebay_price":"1.09","amazon_price":"0.25","coolstuffinc_price":"0.25"}]
},
{
  "id":11714098,
  "name":"30,000-Year White Turtle",
  "type":"Normal Monster",
  "desc":"A huge turtle that has existed for more than 30,000 years.",
  "atk":1250,
  "def":2100,
  "level":5,
  "race":"Aqua",
  "attribute":"WATER",
  "card_images":[{"id":11714098,"image_url":"https://images.ygoprodeck.com/images/cards/11714098.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/11714098.jpg"}],
  "card_prices":[{"cardmarket_price":"0.00","tcgplayer_price":"0.00","ebay_price":"10.53","amazon_price":"0.50","coolstuffinc_price":"0.00"}]
},
{
  "id":83994646,
  "name":"4-Starred Ladybug of Doom",
  "type":"Flip Effect Monster",
  "desc":"FLIP: Destroy all Level 4 monsters your opponent controls.",
  "atk":800,
  "def":1200,
  "level":3,
  "race":"Insect",
  "attribute":"WIND",
  "card_sets":[{"set_name":"Dark Beginning 1","set_code":"DB1-EN198","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.18"},{"set_name":"Pharaoh's Servant",
  "set_code":"PSV-088","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.28"},{"set_name":"Pharaoh's Servant","set_code":"PSV-E088","set_rarity":"Common","set_rarity_code":"(C)","set_price":"0.00"},{"set_name":"Pharaoh's Servant","set_code":"PSV-EN088","set_rarity":"Common","set_rarity_code":"(C)","set_price":"0.00"},{"set_name":"Retro Pack 2","set_code":"RP02-EN022","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.27"},
      {"set_name":"Starter Deck: Yugi Reloaded","set_code":"YSYR-EN010","set_rarity":"Common","set_rarity_code":"(C)","set_price":"1.38"}],
  "card_images":[{"id":83994646,"image_url":"https://images.ygoprodeck.com/images/cards/83994646.jpg","image_url_small":"https://images.ygoprodeck.com/images/cards_small/83994646.jpg"}],
  "card_prices":[{"cardmarket_price":"0.05","tcgplayer_price":"0.14","ebay_price":"1.77","amazon_price":"0.99","coolstuffinc_price":"0.39"}]},
]

function App(){

    return (
      <div>
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

      </div>
 
 );
}

export default App;
