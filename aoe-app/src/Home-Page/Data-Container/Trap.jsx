import CardContainer from "./Card-Container/Card-Container";


const TrapCard = (props) => {
    let list = props.data.map(item => {
         return (<CardContainer {...item} key ={item.id} />
      )
    });
    return <div>{list}</div>;
}

export default TrapCard;