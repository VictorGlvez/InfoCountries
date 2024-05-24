import React from 'react'
import {Card} from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

export const EstructuraOpcion = (props) => {
    const navigate = useNavigate()
    const ruta = () => {
        navigate(props.ruta);
    };
    return (
        <Card  onClick={ruta} className={"card_opciones"}>
            <article className="tarjetaOpcion d-flex flex-column flex-md-row justify-content-center">
                <img className="imagenOpcion" src={props.urlImage} alt=""/>
                <div className='tarjetaTexto'>
                    <h2 className={"titulo_opciones"}>{props.tittle}</h2>
                    <p className={"descripcion_opciones"}>{props.text}</p>
                </div>
            </article>
        </Card>
    )
}
