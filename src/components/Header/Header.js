import './Header.css'

const Header = ()=>{
  const helloWorld = (texto)=> console.log(texto);
  return(
    <header className='test-class' admin={true} persona={{nombre:'Diego'}} onClick={()=>helloWorld('Hola mundo')}>Soy un header</header>
  )
}

export default Header