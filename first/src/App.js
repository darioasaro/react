//   **** ABRIR CONSOLA PARA VER EL ERROR DE EJECUCION LUEGO DE HACER CLICK EN LA CARD***

import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar.js'
import SideBar from './sidebar/sidebar.js'
import CardContainer from './cardContainer/cardContainer.js';
import imagen from './images/javascript.jpg'
import imagenjava from './images/java.jpeg'
import imagenNode from './images/node.jpeg'



class App extends Component {
   constructor(props){
  super(props)
  this.handlerSide = this.handlerSide.bind(this)
    this.state={
        arrGrap:[{
          description:"javascript",
          photo:"photoo",
          clave:'js'
        },
        {
          description:"java",
          photo:"photoo",
          clave:'java'
        },
        {
          description:"node",
          photo:"photoo",
          clave:'node'
        }
        ],
        arrCards : [  
          { img :imagen, 
              desc:'What is JavaScript ? JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.',
               clave:'js'
            },
             { img : imagenjava,
              desc:'Java es un lenguaje de programación orientado a objetos que se incorporó al ámbito de la informática en los años noventa. La idea de Java es que pueda realizarse programas con la posibilidad de ejecutarse en cualquier contexto, en cualquier ambiente, siendo así su portabilidad uno de sus principales logros',
               clave:'java'
            },
            {  img : imagenNode,
              desc:'Node.js es una librería y entorno de ejecución de E/S dirigida por eventos y por lo tanto asíncrona que se ejecuta sobre el intérprete de JavaScript creado por Google V8. Lo cierto es que está muy de moda aunque no es algo nuevo puesto que existen librerías como Twisted que hacen exactamente lo mismo pero si es cierto que es la primera basada en JavaScript y que tiene un gran rendimiento.',
              clave:'node'
            }
        
            
          ],
          isShow:false
  }
}

  handlerSide(){  
    this.setState({
      isShow : !this.state.isShow
      
    })

  }
  
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Navbar handlerSide={this.handlerSide}/>
        <SideBar isShow={this.state.isShow}/>
        <CardContainer arrGrap={this.state.arrGrap} arrCards={this.state.arrCards} graphic={true}/>
        
       
      </div>
    );
  }
}

export default App;
