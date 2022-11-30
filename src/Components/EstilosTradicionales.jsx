import React,{Component} from 'react';
//Traer lso estilos de forma tradicional
import './Estilos/EstilosTradicionales.css'

class EstilosTradicionales extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <header>
                    <h1>
                        Título
                    </h1>
                </header>
            </>
         );
    }
}
 
export default EstilosTradicionales;