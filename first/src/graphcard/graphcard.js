import React,{Component} from 'react'

class GraphCard extends Component{
    constructor(props){
        super(props)
       
    }

    render(){
        if(this.state.visible==='false'){
            return null
        }
        else{
            return(
                <div className="graphcard">
                    <div>{this.props.description}</div>
                    <div>{this.props.photo}</div>
                    

                </div>
            )
        }
    }
}

export default GraphCard