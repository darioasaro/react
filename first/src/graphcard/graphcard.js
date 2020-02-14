import React,{Component} from 'react'

class GraphCard extends Component{
    constructor(props){
        super(props)
        this.handleBoton = this.handleBoton.bind(this)
       
    }

    handleBoton(){
        this.props.handleBoton()
    }

    render(){
       
     
            return(
                <div className="graphcard">
                    <butoon className='botton'onClick={this.handleBoton}>Back</butoon>
                    <div>{this.props.description}</div>
                    <div>{this.props.photo}</div>
                    

                </div>
            )
        
    }
}

export default GraphCard