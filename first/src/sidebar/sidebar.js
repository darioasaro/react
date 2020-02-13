import React from 'react';
import '../sidebar/sidebar.css'
class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isShow:false
        };
    }
    
    
    handlerRadioType = e =>{
        e.preventDefault()
        console.log(e);
        
    }



    render(){
       
        if(!this.props.isShow){
            return null
        }
        else{     
        return(
            <div className="sidebar">
                <section className="info">
                    Asaro Ruben Dario <br/>
                    Dni 31821923<br/>
                    35 YEARS OLD<br/>
                </section>
                <br/>
                <label className="desc-search">Search in cards</label>
                <hr width="100%"/>
                
                <div className="radio-botton">
                    <h4 className="text-side-botton">Filter by</h4>
                    <br/>
                    <label>Frontend</label>
                    <input className="rd" onChange={this.handlerRadioType} type="radio" />
                    <br/>
                    <label>Backend</label>
                    <input className="rd" onChange={this.handlerRadioType} type="radio" />
                </div>
            </div>
        )
    }
}
}
export default SideBar