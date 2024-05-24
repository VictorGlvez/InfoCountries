import { Rectangulo } from "./Rectangulo"
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { countries, theme } from '../utils/countries.js'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { compareCountries } from "../utils/chatgpt.js";

export const Comparador = () => {

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false);
    const [firstCountry, setFirstCountry] = useState(null)
    const [secondCountry, setSecondCountry] = useState(null)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    const compare = async () => {
        setLoading(true);
        const answer = await compareCountries(firstCountry, secondCountry)
        console.log("Answer: ", answer)
        setLoading(false);
        const finalResult = answer.split('\n\n')
        setResult(finalResult)
    }

    const handleFirstCountryChange = (selectedOption) => {
        setFirstCountry(selectedOption);
    };

    const handleSecondCountryChange = (selectedOption) => {
        setSecondCountry(selectedOption);
    };


    return <div className={"fondo fondo_comparador"}>
        <div className="d-flex flex-column">
            <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mb-5">
                <h1 className={"titulo_comparador mt-5"}>Comparador de países</h1>
                <Col xs={7} md={5} xl={3}>
                    <Select className="mt-5 buscador-galeria text-start" onChange={handleFirstCountryChange} options={(secondCountry != null ? countries.filter(x => x != secondCountry) : countries)} isClearable isSearchable placeholder={"Primer país a comparar"} />
                    <Select className="mt-3 buscador-galeria text-start" onChange={handleSecondCountryChange} options={(firstCountry != null ? countries.filter(x => x != firstCountry) : countries)} isClearable isSearchable placeholder={"Segundo país a comparar"} />
                    <button onClick={compare} disabled={(firstCountry == null || secondCountry == null)} className={"my-3 boton_comparar" + (firstCountry == null || secondCountry == null ? " disabled" : "")}>Comparar</button>
                </Col>
            </div>
            <div className="d-flex flex-column align-items-center">

                {loading ? (
                    <div id="loading" className="mt-5"></div>
                ) : (

                    result.length > 0 && (
                        <Col xs={12} sm={10} lg={5} xxl={5}>
                            <Slider {...settings}>
                                {result.map((text, index) => (
                                    <Rectangulo
                                        key={index}
                                        classNames={"my-5"}
                                        backgroundColor={"#113946"}
                                        borderColor={"#FDF6EA"}
                                        textColor={"#FDF6EA"}
                                        height={{ height: "min-content" }}
                                        width={{ width: "auto" }}>
                                        <p className="p-2 p-sm-4 text-center">{text}</p>
                                    </Rectangulo>
                                ))}
                            </Slider>
                        </Col>
                    )
                )}

            </div>
        </div>
    </div>
}
