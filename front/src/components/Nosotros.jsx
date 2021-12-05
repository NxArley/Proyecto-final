import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="profile"/>
         </div>
         <div className="nine columns main-col">
            <h1>Nosotros</h1>
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>Nos pueden contactar en el telefono: {phone}<br/>
            Y con el correo electronico: {email}</p>
            <h1>Integrantes</h1>
            <h3> * Claudia Mora</h3>
            <h3> * Cristian Vitola</h3>
            <h3> * Nixon Zorro</h3>
            <h3> * Luis Enciso</h3>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
