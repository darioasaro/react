import React, {Component} from 'react'
import './Card.css'


class Card extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        
        this.state={
            cardImg:this.props.cardImg,
            cardDesc:this.props.carDesc,
            key:this.props.key,
            
        
            
    };
    }

   
//handle para ejecutar luego de hacer click en la imagen de la card 
    handleClick(){  
       this.props.handleClick(this.props.clave)    
    }
    
    render(){

        return(
           
            
            <div className="card">
                <div className="img-container">
                    <button onClick={this.handleClick}><img className="img-card" src={this.state.cardImg}></img></button>
                </div>
                <div className="description">
                    <p>{this.state.cardDesc}</p>
                </div>

            </div>

        )
            
    }
}
export default Card