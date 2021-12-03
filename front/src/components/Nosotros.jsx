import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="profile"/>
         </div>
         <div className="nine columns main-col">
            <h1>Nosotros</h1>
            <p>{bio}</p>
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
