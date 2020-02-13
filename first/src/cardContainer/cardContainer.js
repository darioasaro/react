import React,{Component} from 'react'
import Card from '../Card/Card.js'
import '../cardContainer/cardContainer.css'

class CardContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            arrCards:props.arrCards
        }
        
    };
  
    render(){
        return(
           
         <div className="cardContainer"> 
         <div className="titulo">
         <h2 >Lenguajes & Tecnologias</h2><br/></div>  
         
                { this.state.arrCards.map((card,i)=>
                
                    <Card cardImg={card.img} carDesc={card.desc} /> )}
                

        </div>
                    
                
        );
    }
}
export default CardContainer