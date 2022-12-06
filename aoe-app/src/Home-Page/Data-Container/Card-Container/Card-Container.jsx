import PropTypes from "prop-types"
import {Route, Routes, Link} from "react-router-dom"
import Home from "../../Component/Home/Home"

const CardContainer = (props) =>{
    
    const {img, btn} = props

    const showImg = (event)=>{

    }

    return(    
        <div>
            {img} ,
             <button >
                <Link to= "/ ">
                    {btn}
                </Link>
            </button>

            <main>
                <Routes>
                    <Route path = "/" element ={<Home />} />
                </Routes>
            </main>

        </div>

        
    )
}

// Check that data is valid
CardContainer.propTypes ={
    img : PropTypes.string.isRequired
}

export default CardContainer