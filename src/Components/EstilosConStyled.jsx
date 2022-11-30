import { hover } from "@testing-library/user-event/dist/hover";
import React,{Component} from "react";
import styled from 'styled-components';
import './variables.css';

class  EstilosConStyled extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 

        const Titulo = styled.h1`
            color:var(--colorTexto);
                &:hover{
                    color:var(--colorTexto2);
                }
            `
            
        const Cabecera=styled.header`
            height:var(--altoHeader);
            background-color:var(--colorHeader);
            width:var(--anchoHeader);
        `
        return ( 
            <>
                <Cabecera>
                    <Titulo> Styled Components</Titulo>
                </Cabecera>
            </>
         );
    }
}
 
export default EstilosConStyled;