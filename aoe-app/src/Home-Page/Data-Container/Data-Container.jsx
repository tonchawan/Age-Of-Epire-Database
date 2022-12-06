import CardContainer from "./Card-Container/Card-Container";

const DataContainer = () =>{

  const data = [
    {id:1, img :"1",btn : "01" }, 
  
    {id:2, img :"2",btn :"02" }, 

    {id:3, img :"3",btn :"03" }, 

    {id:4, img :"4",btn :"04" }, 
  ]

    return(
      <div>             
        <nav>Data Container</nav>

          {data.map((item) =>{
            return <CardContainer img = {item.img} btn ={item.btn} key ={item.id} />
            }
          )}
          
      </div>
    );
  }

  export default DataContainer