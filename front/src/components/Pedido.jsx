import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
    const token = sessionStorage.getItem("token");
    return (
      <section id="portfolio">

        <div className="row">

          <h1 className="offset-lg-2 mt-1 mb-3 text-primary">REALIZA TU PEDIDO</h1>
          <br></br><br></br>
          <div className="col-lg-8 offset-lg-2 border border-primary rounded bg-light mb-3">
            {token && token !== '' && token != undefined ? ("you ar loged " + token) : (
              <form onSubmit={this.handleSubmit}>
                <div class="rrow mt-3 m-2 mr-2 mb-2 ">
                  <div class="col">
                    <label for="exampleInputEmail1" class="form-label">Ingrese un nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
                  </div>
                  <div class="col">
                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                    <input type="text" className="form-control" placeholder="Mesa" aria-label="Last name" />
                  </div>
                  <div class="some-class">
                    <h3>Seleccione tamaño</h3>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">12 oz - $6.000</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">16 oz - $7.000</label>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <div class="some-class">
                    <h3>Base</h3>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">Vainilla Chips</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Brownie</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Chocolate</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Tiramisú</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Chicle</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Fresa</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Arequipe</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Nata Maní</label>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <div class="some-class">
                    <h3>Seleccione Cobertura</h3>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">Leche Condensada</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Chocolate</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Arequipe</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Mora</label>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <div class="some-class">
                    <h3>Seleccione Topping</h3>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">Golochips</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Sparkies</label>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">Barquillos</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Cerezas</label>
                    <input type="radio" class="radio" name="x" value="y" id="y" />
                    <label for="y">Brownie</label>
                    <input type="radio" class="radio" name="x" value="z" id="z" />
                    <label for="z">Masmelos</label>
                  </div>
                  <br></br><br></br><br></br><br></br>
                  <div class="row  m-2 mr-2 mb-2">
                    <div class="position-relative top-0 start-100 translate-middle">
                      <button type="submit" className="btn btn-primary btn-block mt-3 m-2 mr-2 mb-2">Enviar Pedido</button>
                    </div>
                  </div>


                </div>

              </form>
            )}
          </div>
          <div>

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
