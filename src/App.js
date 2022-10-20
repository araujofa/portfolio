import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Paginainicial from './components/Paginainicial';

class App extends Component{
  render(){
    return(
      <div className='App'>

        <section className='header'>
          <Header/>
        </section>

        <section className='pagina-inicial'>
          <Paginainicial/>
        </section>

      </div>
    );
  }
}

export default App;