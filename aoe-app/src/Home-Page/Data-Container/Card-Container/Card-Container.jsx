import "./CardContainer.css"

const CardContainer = (props) =>{
    
    const {cardName , cardType , cardImg, cardArchetype, cardAtk,cardDef,cardDesc} = props
        return(  

        <div className="card">
            <div className="card-img">
                <img src= {cardImg} alt=""  />
            </div>
            
            <div className="card-info">
                 Name : {cardName}
                <br />
                {cardType}
                <br />
                {cardArchetype}
                <br />
                {cardAtk}
                <br />
                {cardDef}
                <br />
                {cardDesc}
            </div>
        </div>

        
    )
}



export default CardContainer