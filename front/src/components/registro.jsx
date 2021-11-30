import React, { Fragment } from 'react';


class Registro extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    emptyItem = {
        username: '',
        password: ''
    }

    state = {
        item: this.emptyItem
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await fetch('https://riego-flask.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.item),
        }).then(resp => {
            if (resp.status === 200) return resp.json();
            else alert('error login ');
        }).then(data => {
            sessionStorage.setItem("token", data.access_token)
            console.log(data.access_token)
        }).catch(error => {
            console.log(error)
        });
        this.props.history.push('/cultivos');
    }

    render() {
        const token = sessionStorage.getItem("token");
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <h1 className="offset-lg-2 mt-1 mb-3 text-primary">Registro</h1>
                        <br></br><br></br>
                        <div className="col-lg-8 offset-lg-2 border border-primary rounded bg-light mb-3">
                            {token && token !== '' && token != undefined ? ("you ar loged " + token) : (
                                <form onSubmit={this.handleSubmit}>
                                    <div class="rrow mt-3 m-2 mr-2 mb-2 ">
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                            <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Apellido</label>
                                            <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row mt-3 m-2 mr-2 mb-2 ">
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Numero Celular</label>
                                            <input type="number" className="form-control" placeholder="Numero Celular" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Direccion</label>
                                            <input type="text" className="form-control" placeholder="Direccion" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row mt-3 m-2 mr-2 mb-2 ">
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Username</label>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="password" className="form-control" placeholder="Password" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row mt-3 m-2 mr-2 mb-5 ">
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" aria-label="First name" />
                                        </div>
                                        <div class="col">
                                            <label for="exampleInputEmail1" class="form-label">Confirmar Password</label>
                                            <input type="password" className="form-control" placeholder="Password" aria-label="Last name" />
                                        </div>
                                    </div>
                                    <div class="row  m-2 mr-2 mb-2">
                                        <div class="position-relative top-0 start-100 translate-middle">
                                            <button type="submit" className="btn btn-primary btn-block mt-3 m-2 mr-2 mb-2">Aceptar</button>
                                            <button type="submit" className="btn btn-danger btn-block mt-3 m-2 mr-2 mb-2">Cancelar</button>
                                        </div>


                                    </div>

                                </form>
                            )}
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Registro;