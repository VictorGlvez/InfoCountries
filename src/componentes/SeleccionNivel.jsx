import React, { useState } from "react"
import { BotonNivel } from "./BotonNivel"

export const SeleccionNivel = () => {
    return (
        <div className="fondo fondo_juego d-flex flex-column align-items-center justify-content-center">
            <h1 className="titulo_juego">¡Hora de divertirse!</h1>
            <h3 className="descripcion_juego">¡Pon a prueba tus conocimientos sobre los distintos países!</h3>
            <div className="my-5">
                <BotonNivel name="Adivina la capital" nav="/capital" desc="Pon a prueba tus conocimientos para adivinar las capitales de diferentes países. ¿Estás listo para aceptar el desafío y convertirte en un maestro de la geografía mundial?" />
                <BotonNivel name="Adivina la bandera" nav="/bandera" desc="Se te presenta una bandera y debes adivinar el país al que pertenece. ¿Serás capaz de adivinar todas las banderas?" />
            </div>
        </div>
    )
}