import React, {useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'

export default function Login() {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    const Login = async(e)=>{

        e.preventDefault();
        const usuario = {correo,contrasena}
        const respuesta = await Axios.post('/admin/login',usuario);
        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Bienvenido'){
            swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })
        }
        else{
            const token = respuesta.data.token
            const nombre = respuesta.data.nombre
            const idusuario = respuesta.data.id

            sessionStorage.setItem('token',token)
            sessionStorage.setItem('nombre',nombre)
            sessionStorage.setItem('idusuario',idusuario)

            swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })

        }
    }

    return (
        <section id="contact">
        <div className="container mt-4">
            <div className="row">
            <h1 className="offset-lg-2 mt-1 mb-3 text-primary">Inicio de Sesion</h1>
            <br></br><br></br>
            <div className="col-lg-8 offset-lg-2 border border-primary rounded bg-light mb-3"> </div>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header text-center">
                        </div>
                        <div className="card-body">
                            <form onSubmit={Login}>
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    onChange={(e)=>setCorreo(e.target.value)}
                                    required
                                    autoFocus
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e)=>setContrasena(e.target.value)}
                                    required
                                    autoFocus
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}