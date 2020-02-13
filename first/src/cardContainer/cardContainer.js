import React,{Component} from 'react'
import Card from '../Card/Card.js'
import '../cardContainer/cardContainer.css'
import imagen from '../images/javascript.jpg'
import imagenjava from '../images/java.jpeg'
import imagenNode from '../images/node.jpeg'

class CardContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            arrCards:[
                { img :imagen, 
                  desc:'What is JavaScript ? JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.'
                },
                 { img : imagenjava,
                  desc:'Java es un lenguaje de programación orientado a objetos que se incorporó al ámbito de la informática en los años noventa. La idea de Java es que pueda realizarse programas con la posibilidad de ejecutarse en cualquier contexto, en cualquier ambiente, siendo así su portabilidad uno de sus principales logros'
                },
                {  img : imagenNode,
                  desc:'Node.js es una librería y entorno de ejecución de E/S dirigida por eventos y por lo tanto asíncrona que se ejecuta sobre el intérprete de JavaScript creado por Google V8. Lo cierto es que está muy de moda aunque no es algo nuevo puesto que existen librerías como Twisted que hacen exactamente lo mismo pero si es cierto que es la primera basada en JavaScript y que tiene un gran rendimiento.'
                }
            
                
              ]
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