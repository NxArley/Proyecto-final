import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Inicio from './components/inicio';
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
// import Contactenos from './Components/Contactenos';
// import Testimonials from './Components/Testimonials';
import Login from './components/login';
import Registro from './components/Registro';
import Pedido from './components/Pedido';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Pedido data={this.state.resumeData.portfolio}/>
        <Login data={this.state.resumeData.main}/>
        <Registro data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        
      </div>

    );
  }
}

export default App;
