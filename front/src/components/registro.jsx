import React, {useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'

export default function Registro() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    const Login = async(e)=>{

        e.preventDefault();
        //const usuario = {nombre,correo,contrasena}
        const usuario = {nombre,apellido,telefono,direccion,correo,contrasena}
        const respuesta = await Axios.post('/admin/crear',usuario);
        const mensaje = respuesta.data.mensaje

        if(mensaje=='El correo ya existe'){
            swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })
        }
        else{
            //const token = respuesta.data.token
            //const nombre = respuesta.data.nombre
            //const idusuario = respuesta.data.id

            //sessionStorage.setItem('token',token)
            //sessionStorage.setItem('nombre',nombre)
            //sessionStorage.setItem('idusuario',idusuario)

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
        <div className="container">
            <div className="row">
                <h1 className="offset-lg-2 mt-1 mb-3 text-primary">Registro</h1>
                <br></br><br></br>
                <div className="col-lg-8 offset-lg-2 border border-primary rounded bg-light mb-3">
                        <form onSubmit={Login}>
                            <div class="row mt-3 m-2 mr-2 mb-2 ">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" onChange={(e)=>setNombre(e.target.value)} required autoFocus/>
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Apellido</label>
                                    <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" onChange={(e)=>setApellido(e.target.value)} required autoFocus/>
                                </div>
                            </div>
                            <div class="row mt-3 m-2 mr-2 mb-2 ">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Numero Celular</label>
                                    <input type="number" className="form-control" placeholder="Numero Celular" aria-label="Mobile phone" onChange={(e)=>setTelefono(e.target.value)} required autoFocus/>
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Direccion</label>
                                    <input type="text" className="form-control" placeholder="Direccion" aria-label="Address" onChange={(e)=>setDireccion(e.target.value)} required autoFocus/>
                                </div>
                            </div>
                            <div class="row mt-3 m-2 mr-2 mb-2 ">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="email" aria-label="email" onChange={(e)=>setCorreo(e.target.value)} required autoFocus/>
                                </div>
                            </div>
                            <div class="row mt-3 m-2 mr-2 mb-5 ">
                                <div class="col">
                                    <label for="exampleInputEmail1" class="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" aria-label="First name" onChange={(e)=>setContrasena(e.target.value)} required autoFocus/>
                                </div>
                            </div>
                            <div class="row mt-3 m-2 mr-2 mb-2">
                                <div class="position-relative top-0 start-100 translate-middle">
                                    <button type="submit" className="btn btn-primary btn-block  mt-3 m-2 mr-2 mb-2">Enviar</button>
                                    <button type="reset" className="btn btn-secondary btn-block mt-3 m-2 mr-2 mb-2">Reset</button>
                                </div>
                            </div>
                        </form>
                </div>
            </div>

        </div>
    </section>
    )
}