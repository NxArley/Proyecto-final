import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var malte = this.props.data.malte.map(function (malte) {
        return <div key={malte.name}><h3>{malte.name}</h3>
          <p>{malte.description}</p></div>
      })
      var hel = this.props.data.hel.map(function (hel) {
        return <div key={hel.name}><h3>{hel.name}</h3>
          <p>{hel.description1}</p></div>
      })
      var canasta = this.props.data.canasta.map(function (canasta) {
        return <div key={canasta.name}><h3>{canasta.name}</h3>
          <p>{canasta.description1}</p></div>
          })
    }

    return (
      <section id="resume">
        <div className="row education">
          <h1>{skillmessage}</h1>
          <br></br>
          <div className="three columns">
            <img className="profile-pic" src="../images/malteada.jpg" />
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {malte}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">
          <br></br>
          <div className="three columns">
            <img className="profile-pic" src="../images/helados.jfif" />
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {hel}
              </div>
            </div>
          </div>

        </div>



        <div className="row skill">

          <br></br>
          <div className="three columns">
            <img className="profile-pic" src="../images/canasta.jpg" />
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {canasta}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
