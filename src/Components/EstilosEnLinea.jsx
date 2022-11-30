import React,{Component} from 'react';

class  EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 

    const titulo = {
        textAlign : "center",
        color: "#FF00FF"
    }

        return ( 
            <>
                <h1 style={titulo}>Estilos en línea con JS</h1>
            </>
         );
    }
}
 
export default EstilosEnLinea;