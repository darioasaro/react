import React, {Component} from 'react'
import './Card.css'
import GraphCard from '../graphcard/graphcard.js'

class Card extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        
        this.state={
            cardImg:this.props.cardImg,
            cardDesc:this.props.carDesc,
            visible:false
    };
    }

   

    handleClick(){
        this.setState(state => ({
            visible: !state.visible
          }));
        
    }
    
    render(){

            if(this.state.visible == true){
              

               return( <div>
                    <GraphCard visible={this.state.visible}/>
                </div>
               )
            }

            else{

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
}
export default Card