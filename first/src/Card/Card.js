import React, {Component} from 'react'
import './Card.css'
import img from '../images/javascript.jpg'

class Card extends Component{
    constructor(props){
        super(props)
        console.log(props);
        
        this.state={
            cardImg:this.props.cardImg,
            cardDesc:this.props.carDesc
    };
    }
    render(){
        return(
            <div className="card">
                <div className="img-container">
                    <a href="#"><img className="img-card" src={this.state.cardImg}></img></a>
                </div>
                <div className="description">
                    <p>{this.state.cardDesc}</p>
                </div>

            </div>

        )
    }
}
export default Card