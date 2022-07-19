import Header from "./components/Header/Header";
import Boton from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import DateContainer from "./components/DateContainer/DateContainer";
import Counter from "./components/Counter/Counter";


function App() {

  return (
    <>
    {/* <Header onClick={hola()} title={{hola:"hola"}} active={true} className="hola"/> */}
    {/* <Boton texto='Hola comisión' numero={1}/> */}
    <Footer comision='1i' activa={true} />
    <br/>
    <DateContainer/>
    <Counter/>
    </>
  );
}

export default App;


// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super()
//   }
//   componentDidMount()
//   componentDidUpdate()
//   componentWillUnmount()
//   render(){
//     return(
//       <div>hola mundo</div>
//     )
//   }
// }