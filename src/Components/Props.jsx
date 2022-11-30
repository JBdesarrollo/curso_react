import React,{Component} from 'react';

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <>
                <h2>Las frutas son: {this.props.lista}</h2>
            </>
         );
    }
}
 
export default Props;