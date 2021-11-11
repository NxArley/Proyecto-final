import React, { useState } from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container-fluid m-2 ">
                    <a className="navbar-brand">Restaurante </a>
                    <div class="d-flex ml-3">
                        <button className ="btn btn-outline-success mr-3" >Login</button>
                        <button className ="btn btn-outline-success" >Registro</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;