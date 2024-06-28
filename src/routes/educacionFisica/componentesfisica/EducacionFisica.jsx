import "../stylesfisica/edfisica.css";
import { Footer } from "../../../components/footer/Footer";
import { useState } from "react";
import { PrincipalFisica } from "./PrincipalFisica";
import { NivelSecundario } from "./NivelSecundario";
import { NivelSuperior } from "./NivelSuperior";
import { Galeria } from "./Galeria";
import { NivelPrimario } from "./NivelPrimario";
import { NivelInicial } from "./NivelInicial";
export const EducacionFisica = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  const [inicial, setInicial] = useState(false);

  return (
    <div className="fisica">
      <div className="contenedor3">
        <img src="./src/assets/imgCoordinaciones/coorfisica.jpeg" alt="" />
      </div>
      <div className="botonesNav">
        <button
          className="btn"
          type="button"
          value={principal}
          onClick={() => {
            setPrincipal(true);
            setInicial(false);
            setNivelPrimario(false);
            setNivelSecundario(false);
            setNivelSuperior(false);
            setGaleria(false);
          }}
        >
          Principal
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setInicial(true);
            setNivelPrimario(false);
            setNivelSecundario(false);
            setPrincipal(false);
            setNivelSuperior(false);
            setGaleria(false);
          }}
        >
          Nivel Inicial
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setInicial(false);
            setNivelPrimario(true);
            setNivelSecundario(false);
            setPrincipal(false);
            setNivelSuperior(false);
            setGaleria(false);
          }}
        >
          Nivel Primario
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setInicial(false);
            setNivelSecundario(true);
            setNivelPrimario(false);
            setPrincipal(false);
            setNivelSuperior(false);
            setGaleria(false);
          }}
        >
          Nivel Secundario
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setInicial(false);
            setNivelSecundario(false);
            setNivelPrimario(false);
            setPrincipal(false);
            setNivelSuperior(true);
            setGaleria(false);
          }}
        >
          Nivel Superior
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setInicial(false);
            setNivelSecundario(false);
            setNivelPrimario(false);
            setPrincipal(false);
            setNivelSuperior(false);
            setGaleria(true);
          }}
        >
          Galeria
        </button>
      </div>
      {/* 
      muestra de diferente modulos de la pagina 
      */}
      {inicial ? (
        <NivelInicial />
      ) : principal ? (
        <PrincipalFisica />
      ) : nivelPrimario ? (
        <NivelPrimario />
      ) : nivelSecundario ? (
        <NivelSecundario />
      ) : nivelSuperior ? (
        <NivelSuperior />
      ) : galeria ? (
        <Galeria />
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
};
