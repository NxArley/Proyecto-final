import React, {useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'

export default function Pedidos() {

    const [nombre, setNombre] = useState('')
    const [mesa, setMesa] = useState('')
    const [size, setSize] = useState(0)
    const [base, setBase] = useState('')
    const [cobertura, setCobertura] = useState('')
    const [toppings, setToppings] = useState('')

    const Pedidos = async(e)=>{

        e.preventDefault();
        //const usuario = {nombre,correo,contrasena}
        const pedido = {nombre,mesa,size,base,cobertura,toppings}
        const respuesta = await Axios.post('/pedido/pedir',pedido);
        const mensaje = respuesta.data.mensaje

        if(mensaje==='pedido realizado exitosamente'){
            swal.fire({
                icon:'success',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
            })
        }
    }

    return (
    <section id="portfolio">
        <div className="row">
        <h1 className="offset-lg-2 mt-1 mb-3 text-primary">REALIZA TU PEDIDO</h1>
        <br></br><br></br>
        <div className="col-lg-8 offset-lg-2 border border-primary rounded bg-light mb-3">
            <form onSubmit={Pedidos}>
                <div className="row mt-3 m-2 mr-2 mb-2 ">
                <div className="col">
                    <label for="exampleInputEmail1" className="form-label">Ingrese un nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="clientName" onChange={(e)=>setNombre(e.target.value)}/>
                </div>
                <div className="col">
                    <label for="exampleInputEmail1" className="form-label">Mesa</label>
                    <input type="text" className="form-control" placeholder="Mesa" aria-label="table" onChange={(e)=>setMesa(e.target.value)}/>
                </div>
                <div className="input-group" onChange={(e)=>setSize(e.target.value)}>
                    <h3>Seleccione tamaño</h3>
                    <input type="radio" className="radio" name="tamanio" value="12" id="12oz" />
                    <label for="12oz">12 oz - $6.000</label>
                    <input type="radio" className="radio" name="tamanio" value="16" id="16oz" />
                    <label className="form-label" for="16oz">16 oz - $7.000</label>
                </div><br/><br/>
                <div className="input-group" onChange={(e)=>setBase(e.target.value)}>
                    <h3>Base</h3>
                    <input type="radio" className="radio" name="base" value="Vainilla Chips" id="vainilla chips" />
                    <label for="vainilla chips">Vainilla Chips</label>
                    <input type="radio" className="radio" name="base" value="Brownie" id="brownie" />
                    <label for="brownie">Brownie</label>
                    <input type="radio" className="radio" name="base" value="Chocolate" id="chocolate" />
                    <label for="chocolate">Chocolate</label>
                    <input type="radio" className="radio" name="base" value="tiramisu" id="tiramisu" />
                    <label for="tiramisu">Tiramisú</label>
                    <input type="radio" className="radio" name="base" value="Chicle" id="chicle" />
                    <label for="chicle">Chicle</label>
                    <input type="radio" className="radio" name="base" value="Fresa" id="fresa" />
                    <label for="fresa">Fresa</label>
                    <input type="radio" className="radio" name="base" value="Arequipe" id="arequipe" />
                    <label for="arequipe">Arequipe</label>
                    <input type="radio" className="radio" name="base" value="Nata mani" id="nata" />
                    <label for="nata">Nata Maní</label>
                </div><br/><br/>
                <div className="input-group" onChange={(e)=>setCobertura(e.target.value)}>
                    <h3>Seleccione Cobertura</h3>
                    <input type="radio" className="radio" name="cobertura" value="Leche Condensada" id="leche condensada" />
                    <label for="leche condensada">Leche Condensada</label>
                    <input type="radio" className="radio" name="cobertura" value="Chocolate" id="chocolate2" />
                    <label for="chocolate2">Chocolate</label>
                    <input type="radio" className="radio" name="cobertura" value="Arequipe" id="arequipe2" />
                    <label for="arequipe2">Arequipe</label>
                    <input type="radio" className="radio" name="cobertura" value="Mora" id="mora" />
                    <label for="mora">Mora</label>
                </div><br/><br/>
                <div className="input-group" onChange={(e)=>setToppings(e.target.value)}>
                    <h3>Seleccione Topping</h3>
                    <input type="radio" className="radio" name="topping" value="Golochips" id="golochips" />
                    <label for="golochips">Golochips</label>
                    <input type="radio" className="radio" name="topping" value="Sparkies" id="sparkies" />
                    <label for="sparkies">Sparkies</label>
                    <input type="radio" className="radio" name="topping" value="Barquillos" id="barquillos" />
                    <label for="barquillos">Barquillos</label>
                    <input type="radio" className="radio" name="topping" value="Cerezas" id="cerezas" />
                    <label for="cerezas">Cerezas</label>
                    <input type="radio" className="radio" name="topping" value="Brownie" id="brownie2" />
                    <label for="brownie2">Brownie</label>
                    <input type="radio" className="radio" name="topping" value="Masmelos" id="masmelos" />
                    <label for="masmelos">Masmelos</label>
                </div><br/><br/>
                <div class="row  m-2 mr-2 mb-2">
                    <div class="position-relative top-0 start-100 translate-middle">
                    <button type="submit" className="btn btn-primary btn-block mt-3 m-2 mr-2 mb-2">Enviar Pedido</button>
                    </div>
                </div>
                </div>
            </form>
        </div>
        </div>
    </section>
    )
}