import React, { useEffect, useState } from 'react';

const Hooks = ()=>{

    const[color,setColor] = useState('yellow');
    const[contador,setContador] = useState(0);
    const fondo = {
        width:'100%',
        height:'1000px',
        backgroundColor:color
    }
useEffect(()=>{
    let intervalo = setInterval(()=>{
        setContador(contador+1);
    },1000);

    return ()=>{clearInterval(intervalo)}
    
},[contador]);

    const cambioColor = ()=>{
        if(color==='yellow')
            setColor('purple');
        else
            setColor('yellow');    
    }
    return <>
        
        <div style={fondo} className='container'>
            <h1>Contador: {contador}</h1>
            <button onClick={cambioColor}>Cambiar color de fondo</button>
        </div>
    </>
}

export default Hooks;