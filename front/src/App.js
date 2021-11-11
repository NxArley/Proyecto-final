import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/nav';
import Registro from './components/registro';
import Inicio from './components/inicio';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact={true} path="/" element={<Inicio />} />
                    <Route exact={true} path="/login" element={<Login />} />
                    <Route exact={true} path="/registro" element={<Registro />} />
                </Routes>
            </BrowserRouter>

        );
    }

}

export default App;