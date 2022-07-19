const Footer = ({comision, activa}) =>{
  // let status;
  // if(activa){
  //   status = 'está activa';
  // }else{
  //   status = 'ya ha finalizado';
  // }
  return(
    <footer>
      La comisión {comision} {activa?<button>Admin</button>:null}
      La comisión {comision} {activa?'está activa':'ya ha finalizado'}
    </footer>
  )
}

export default Footer
// const sumar = ()=>{
//   let x=1;
//   let y=2;
//   return x+y;
// }
