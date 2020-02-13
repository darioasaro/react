import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar.js'
import CardContainer from './cardContainer/cardContainer.js';
import imagen from './images/javascript.jpg'
import imagenjava from './images/java.jpeg'



class App extends Component {
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
      {  img : imagen,
        desc:'descripcion de carta2'
      }
  
      
    ]
  }
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
        <Navbar/>
        <CardContainer arrCards={this.state.arrCards}/>
        
       
      </div>
    );
  }
}

export default App;
