import { useState } from "react"
import './DateContainer.css'

const DateContainer = ()=>{
  const [state, setState] =                 useState(         )
  //!  estado  funcion p/cambiar el estado    valor inicial del estado
  const [day, setDay] = useState(18);
  const [month, setMonth] = useState('Julio');
  const [year, setYear] = useState(2022);
  const handleDate = ()=>{
    setYear(year+1)
  }
  return(
    <div id="date-container" className="d-flex justify-content-center flex-column align-items-center">
    <button onClick={handleDate}>Cambiar fecha</button>
    <p>Hoy es {day} de {month} de {year}</p>
    </div>
  )
}








// import {Component} from 'react'

// class DateContainer extends Component{
//   constructor(){
//     super();
//     this.state = {
//       day:18,
//       month:'Julio',
//       year: 2022
//     }
//   }
//   handleYear(){
//     this.setState({
//       ...this.state,
//       year:2062
//     });
//   }
  
//   render(){
//     return(
//       <>
//         <button onClick={()=>this.handleYear()}>Cambiar fecha</button>
//         <p> Hoy es {this.state.day} de {this.state.month} de {this.state.year}</p>
//       </>
//     )
//   }
// }

export default DateContainer