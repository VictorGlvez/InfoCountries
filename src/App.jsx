import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Introduccion } from './componentes/Introduccion'
import { Opciones } from './componentes/Opciones'
import { Buscador } from "./componentes/Buscador.jsx";
import { Galeria } from "./componentes/Galeria.jsx";
import { About } from "./componentes/About.jsx";
import { Comparador } from './componentes/Comparador.jsx';
import { useLocation } from 'react-router-dom';
import { Routes, Route, } from "react-router-dom";
import { Pagenotfound } from './componentes/Pagenotfound.jsx';
import Footer from "./componentes/Footer.jsx";
import { useEffect } from 'react';
import Header from './componentes/Header.jsx';
import { SeleccionNivel } from './componentes/SeleccionNivel.jsx';
import { JuegoBandera } from './componentes/JuegoBandera.jsx';
import { JuegoCapital } from './componentes/JuegoCapital.jsx';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        <>
            <Header />
            <Routes>
                <Route index element={
                    <>
                        <Introduccion />
                        <Opciones />
                    </>} />
                <Route path="/busquedaAvanzada" element={<Buscador />} />
                <Route path="/comparador" element={<Comparador />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/minijuego" element={<SeleccionNivel />} />
                <Route path="/about" element={<About />} />
                <Route path="/bandera" element={<JuegoBandera />} />
                <Route path="/capital" element={<JuegoCapital />} />
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
