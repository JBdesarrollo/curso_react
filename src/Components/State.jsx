import React,{Component} from 'react';

class  State extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nombre:"Alejandro",
            apellido: "Barcasnegras G"
         }
    }
    
    cambiarDatos(){
        this.setState({
            nombre: "Iker",
            apellido: "Barcasnegras I"
        });

    }

    render() { 
        return ( 
            <>
                <h2>Cambiando los estados</h2>
                <p>El nombre es { this.state.nombre } { this.state.apellido }</p>
                <button onClick={ this.cambiarDatos.bind(this) }>Cambiar</button>
            </>
         );
    }
}
 
export default State;