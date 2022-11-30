import React, { useState } from 'react'

const Formularios = () => {
  const[nombre,setNombre]=useState(false);
  const[apellido,setApellido]=useState(false);
  const[email,setEmail]=useState(false);
  const[password,setPassword]=useState(false);

  //Expresiones regulares
  const nombreRegex = /^[a-zA-Z]{3,16}$/;
  const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]{2,30}[.][a-zA-Z]{2,4}$/;
  const apellidoRegex = /^[a-zA-Z]{3,16}$/;
  const passwordRegex = /^[a-zA-Z]{6,18}$/;

  const valorNombre = (nombreValidar)=>{
    console.log('xxx')
    if(nombreValidar.trim()){
        if(nombreRegex.test(nombreValidar)){
          setNombre(true);
        }

    }
  }
  const valorApellido = (apellidoValidar)=>{
    if(apellidoValidar.trim()){
      if(apellidoRegex.test(apellidoValidar)){
        setApellido(true);
      }

  }
  }
  const valorEmail= (emailValidar)=>{
    if(emailValidar.trim()){
      if(emailRegex.test(emailValidar)){
        setEmail(true);
      }

    }
  }

  const valorPassword = (passwordValidar)=>{
    
  }
  
  const enviar=(e)=>{
    e.preventDefault();
    if(nombre === true && apellido === true 
      && email === true && password === true){
        console.log('Los datos han sido validados');
    }else{
      console.log('Datos inválidos');
    }

  }

  return (
    <>
    <form action="" onSubmit={e=>enviar(e)}>
      <h3>Nombre</h3>
      <input type="text" onChange={e=>valorNombre(e.target.value)} />
      <h3>Apellido</h3>
      <input type="text" onChange={e=>valorApellido(e.target.value)}/>
      <h3>Email</h3>
      <input type="email" autoComplete='off' onChange={e=>valorEmail(e.target.value)}/>
      <h3>Password</h3>
      <input type="password" autoComplete='off' onChange={e=>valorPassword(e.target.value)}/><br /><br />
      <input type="submit" />
    </form>
    </>
  )


  
}

export default Formularios;
  
