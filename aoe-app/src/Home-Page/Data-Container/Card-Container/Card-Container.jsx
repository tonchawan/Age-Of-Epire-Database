import PropTypes from "prop-types"
import {Route, Routes, Link} from "react-router-dom"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./CardContainer.css"

const CardContainer = (props) =>{
    
    const {id, card_images, type, name, atk, def} = props

        return(    
        <div>
            <img src = {card_images[0].image_url_small}/>
            {name}
            {type}
            {atk}
            {def}
        </div>

        
    )
}

// Check that data is valid
CardContainer.propTypes ={
    id : PropTypes.number.isRequired
}

export default CardContainer