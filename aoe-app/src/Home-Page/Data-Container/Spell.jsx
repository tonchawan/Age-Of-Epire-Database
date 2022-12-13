import CardContainer from "./Card-Container/Card-Container";


const SpellCard = (props) => {
    
    return(
    
      <div>
        <ul>
          {props.data.map((item)=>{
            return ( 
            <CardContainer 
            cardImg={item.card_images[0].image_url}
            cardId={item.id}
            cardName={item.name} 
            cardType={item.type}
            cardAtk={`ATK :${item.atk}`}
            cardDef={`DEF :${item.def}`}
            cardDesc ={item.desc}
            key={item.id}/>)
          })}
        </ul>
      </div>)
  }

export default SpellCard;
