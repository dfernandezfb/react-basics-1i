import { useState } from "react";

const Counter = () => {
  let [number, setNumber] = useState(0);
  // let number=0;
  const handleCounter = (operation)=>{
    switch(operation){
      case 'resta':
        setNumber(number-1);
        // number= number - 1;
        break;
      case 'suma':
        setNumber(number+1);
        // number= number + 1;
        break;
      case 'cero':
        setNumber(0);
        // number=0;
        break;
    }
    console.log(number);
  }
  return ( 
    <>
    <h1>{number}</h1>
    <br />
    <button onClick={()=>handleCounter('resta')}>-1</button>
    <button onClick={()=>handleCounter('cero')}>Volver a cero</button>
    <button onClick={()=>handleCounter('suma')}>+1</button>
    </>
  );
}
 
export default Counter;