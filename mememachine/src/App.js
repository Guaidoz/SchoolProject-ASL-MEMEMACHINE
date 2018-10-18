import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';
import links from './links.js';

class App extends Component {
  constructor() {
    super();
    this.state ={
      vet:new links(),
      currentTodo: '',
    }
    
    this.onChangeText = this.onChangeText.bind(this);
  }
  
  onChangeText(event) {
    event.preventDefault();
    var v = this.state.vet.getLinks(document.getElementById("userChoice").value.toLowerCase());
    if(v==null){
      document.getElementById("stampa").innerHTML="<li>Nessun riscontro</li>";
    }
    else{
      var s='';

      for(var i=0; i<v.length; i++){
        s=s+"<li id='vettoreStampa"+i+"'><img src='"+v[i].getL()+"' onClick={window.open('"+v[i].getL()+"','_blank')}><p id='p'>Tag: #"+v[i].getT()+"</p></li>"
      }

      document.getElementById("stampa").innerHTML=s;
    }
	}
  
  render() {
    return (
      <div>
        <div id="box">
        <h1>MEME MACHINE</h1>
          <form onChange={this.onChangeText} onSubmit={(event)=>{event.preventDefault()}}>
            <input id="userChoice"/>
            <br></br>
            <p>Cerca per categoria (es: gatti, spongebob, russia, mlg)
            <br></br>
            Clicca sull'immagine per aprirla</p>
          </form>
        </div>
        <br></br>
        <div id="box2">
          <ul id="stampa">
          </ul>
        </div>
     </div>
    )
  }
}

export default App;
