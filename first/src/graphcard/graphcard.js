import React,{Component} from 'react'

class GraphCard extends Component{
    constructor(props){
        super(props)
        this.state={
            visible:false

        }
    }

    render(){
        if(this.state.visible=='false'){
            return null
        }
        else{
            return(
                <div>
                        <h1>GraphCard</h1>
                </div>
            )
        }
    }
}

export default GraphCard