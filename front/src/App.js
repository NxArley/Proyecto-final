import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Inicio from './Components/Inicio';
import Footer from './Components/Footer';
import Nosotros from './Components/Nosotros';
import Productos from './Components/Productos';
// import Contactenos from './Components/Contactenos';
// import Testimonials from './Components/Testimonials';
import Login from './Components/Login';
import Registro from './Components/Registro';
import Pedido from './Components/Pedido';

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
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Login data={this.state.resumeData.main}/>
        <Registro data={this.state.resumeData.main}/>
        {/* <Contactenos data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
        
      </div>
    );
  }
}

export default App;
