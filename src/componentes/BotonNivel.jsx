import React, { useState, useEffect } from "react"
import Popup from 'reactjs-popup';
import { FaQuestionCircle } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom'

export const BotonNivel = (props) => {
    const [popupPosition, setPopupPosition] = useState("right center");
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setPopupPosition("bottom center");
            } else {
                setPopupPosition("right center");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="align-items-center text-center p-2">
            <button className="boton_seleccion_nivel" onClick={() => navigate(props.nav)}>{props.name}
                <Popup trigger={<button className="buttonPopUp"><FaQuestionCircle className="icono_interrogacion"/></button>}
                    position={popupPosition}>
                    <div className="game_desc">{props.desc}</div>
                </Popup>
            </button>
        </div>
    )
}