// import PropTypes from "prop-types"
import "./CardContainer.css"

const CardContainer = (props) =>{
    
    const {cardName , cardType , cardImg, cardArchetype=[]} = props

        return(    
        <div className="card">
            {/* {cardName}
            <img src= {cardImg} alt=""  />
            {cardType} */}
            {new Set(cardArchetype)}
            {console.log(cardArchetype)}

        </div>

        
    )
}

// Check that data is valid
// CardContainer.propTypes ={
//     id : PropTypes.number.isRequired
// }

export default CardContainer