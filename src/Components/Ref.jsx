import React,{createRef} from 'react'

const Ref = () => {

  const cambioColor=createRef();  
  const   cambioColorTexto=()=>{
    cambioColor.current.style.color='blue';
  }
  return (
    <>
        <h1 ref={cambioColor}>Ejemplo de REF</h1>
    <button onClick={cambioColorTexto}>Cambiar color</button>
    </>
    
  )
}

export default Ref