import React from "react"
import flagCrying from '../assets/flag_crying.png'

export const Pagenotfound = () => {
    return (
        <div className="fondo_pnf d-flex flex-column align-items-center ">
            <img className="cryingflag" src={flagCrying} alt="Crying flag"/>
            <h1 className="pagenotfound">Lo siento, esta página no existe</h1>
        </div>
    )
}