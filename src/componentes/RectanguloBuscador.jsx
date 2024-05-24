import React, {useContext, useEffect, useState} from "react";
import {Row, Col} from "react-bootstrap";
import Select from "react-select";
import {countries} from '../utils/countries.js'
import {MyContext} from "./Buscador.jsx";

const RectanguloBuscador = () => {

   const {handlers, selectData} = useContext(MyContext);

    return (
        <div style={{
            backgroundColor: "#113946",
            borderColor: "#FDF6EA",
            color: "#FDF6EA",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            border: "thick solid"
        }}>
            <div className="container p-4">
                <Row>
                    {selectData.map((select, index) => (
                        <Col xs={12} md={6} key={index}>
                            <Row className="mb-3">
                                <Col xs={12} lg={4}>
                                    <label>{select.field}</label>
                                </Col>
                                <Col xs={12} lg={8}>
                                    <Select
                                        className="text-start select_buscador"
                                        options={select.options}
                                        isClearable
                                        isSearchable
                                        onChange={handlers[select.field]}
                                        styles={{
                                            control: (provided) => ({
                                                ...provided,
                                                '&:hover': {
                                                    cursor: 'pointer'
                                                }
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default RectanguloBuscador;




