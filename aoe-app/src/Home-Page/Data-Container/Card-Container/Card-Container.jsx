import PropTypes from "prop-types"
import "./CardContainer.css"

const CardContainer = (props) =>{
    
    const {type, name, atk, def} = props

        return(    
        <div>
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