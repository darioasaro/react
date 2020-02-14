//   **** ABRIR CONSOLA PARA VER EL ERROR DE EJECUCION LUEGO DE HACER CLICK EN LA CARD***


import React,{Component} from 'react'
import Card from '../Card/Card.js'
import GraphCard from '../graphcard/graphcard.js'
import '../cardContainer/cardContainer.css'


class CardContainer extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
        this.handleBoton=this.handleBoton.bind(this)
        this.state={
            
            arrCards:props.arrCards,
            arrGrap : props.arrGrap,
            graphic : false

              
        }

    };

    handleBoton(){
        this.setState({
            arrGrap:this.props.arrGrap,
            graphic:false
        })

    }
//captura el evento del click en la card y busca en el arrGrap el grafico correspondiente
    handleClick(clave){ 
        
      const graph = this.state.arrGrap.filter((grap)=>{
            
                if (grap.clave === clave){ 
                     
                  this.setState(
                  {
                      graphic:true,
                      arrGrap:graph
                  })
                
                return grap
                  
                }
                
                 
        })
        
        
     
            this.setState({
                arrGrap:graph
            })
            
     
     
}
    //*** FALTA CREAR CONDICIONAL PARA RENDERIZAR ARRCARDS O ARRGRAP
    render(){

        if(this.state.graphic===false){
        return(
            
         <div className="cardContainer">
         <div className="titulo">
         <h2 >Lenguajes & Tecnologias</h2><br/></div>

                { this.state.arrCards.map((card,i)=>

                    <Card cardImg={card.img} carDesc={card.desc} clave={card.clave} handleClick={this.handleClick}/> )}


        </div>
        )
                }
        else{
            return(
            <GraphCard handleBoton={this.handleBoton} description = {this.state.arrGrap[0].description} photo={this.state.arrGrap[0].photo} />
            )
        }
       

       
    }
}
export default CardContainer