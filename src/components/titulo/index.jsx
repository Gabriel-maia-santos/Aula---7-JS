import React, {Component} from 'react';
import '../titulo/index.css';

//Utiliza caso eu queria alterar algo
class Titulo extends Component{
    render(){
    return(
            <div className='background'>
            <h1>{this.props.texto}</h1>
            <h4>{this.props.descricao || 'Descrição não informada'}</h4>
        </div>
        ) 
    }
}

export default Titulo;