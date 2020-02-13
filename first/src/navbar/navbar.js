import React from "react";
import '../navbar/navbar.css'
import img from '../images/cubo.jpg'
import Sidebar from '../sidebar/sidebar.js'
class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
       
        this.state = {isShow: true};
    }
      

    handlerClick(){
        this.setState(state => ({
            isShow: !state.isShow
          }));
        
    }


    render(){
        return(
            <div className="navbar">
                <div className="boton-container">
                <button onClick={this.handlerClick}className="link"><img src={img} className="imagen"></img>
                
                </button>
                </div>
            <div className="sidebar">
                <Sidebar isShow={this.state.isShow} />

            </div>
            </div>
        )
    }
}
export default NavBar