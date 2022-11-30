import React,{Component} from "react";


class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"Alejandro",
            evento:null
         }
    }
    

    cambiarNombre(){
        this.setState({nombre:"Iker"});
    }
//MOntamos el componente (eventos,peticiones http)
componentDidMount(){
    this.setState.evento = window.addEventListener('resize',()=>{
        console.log(window.innerWidth);
    })
}
//Actualziaciones del componente
componentDidUpdate(prevProps,prevState){
    if(prevState === this.state.nombre)
        console.log("No ha cambiado el estado");
    else
        console.log("El estado cambió");    
}   
//El componente será desmontado
componentWillUnmount(){
    window.removeEventListener('resize',this.state.evento);
}     

    render() { 
        return ( 
            <>
            <h1>{this.state.nombre}</h1>
                <button onClick={this.cambiarNombre.bind(this)}>Cambiar nombre</button>

            </>
         );
    }
}
 
export default CicloVidaComponentes;