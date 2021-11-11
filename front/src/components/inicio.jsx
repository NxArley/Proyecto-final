import React, { Fragment } from 'react';
import Card from './card';
import Carousel from './carrusel'
class Inicio extends React.Component {




    render() {

        return (
            <Fragment>
                <div className="container mt-5">
                    <Carousel className="offset-sm-1"/>
                    <h1 className="offset-sm-1 mt-5 text-primary">Productos</h1>
                    <div className="offset-sm-1 row">
                        <Card className="ml-2" />
                        <Card className="ml-2" />
                        <Card className="ml-2" />
                        <Card className="ml-2" />
                        <Card className="ml-2" />
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Inicio;