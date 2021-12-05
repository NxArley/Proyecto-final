import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Inicio from './components/inicio';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Login from './components/Login';
import Registro from './components/Registro';
import Pedidos from './components/Pedidos';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Inicio data={this.state.resumeData.main}/>
        <Nosotros data={this.state.resumeData.main}/>
        <Productos data={this.state.resumeData.resume}/>
        <Pedidos/>
        <Login/>
        <Registro/>
        <Footer data={this.state.resumeData.main}/>
        
      </div>

    );
  }
}

export default App;
