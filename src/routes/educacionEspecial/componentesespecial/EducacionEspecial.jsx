import { useState } from "react";
import { Footer } from "../../../components/footer/Footer";
import { Galeria } from "./Galeria";
import { NivelSecundario } from "./NivelSecundario";
import { Nivelsuperior } from "./Nivelsuperior";
import { Principal } from "./Principal";
import "../stylesespecial/edespecial.css";
import { NivelPrimario } from "./NivelPrimario.jsx";
export const EducacionEspecial = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="especial">
      <div className="contenedorEspecial">
        <img src="./src/assets/imgCoordinaciones/coorespecial.jpeg" alt="" />
      </div>
      <div className="botonesNav">
        <button
          className="btn btn-info"
          type="button"
          value={principal}
          onClick={() => {
            setPrincipal(true);
            setNivelPrimario(false);
            setNivelSecundario(false);
            setNivelSuperior(false);
            setGaleria(false);
          }}
        >
          Principal
        </button>
        {/* <button
          type="button"
          className="btn btn-info"
          onClick={() => {
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
          className="btn btn-info"
          onClick={() => {
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
          className="btn btn-info"
          type="button"
          onClick={() => {
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
          className="btn btn-info"
          onClick={() => {
            setNivelSecundario(false);
            setNivelPrimario(false);
            setPrincipal(false);
            setNivelSuperior(false);
            setGaleria(true);
          }}
        >
          Galeria
        </button> */}
      </div>
      {/* 
      muestra de diferente modulos de la pagina 
      */}
      {principal ? (
        <Principal />
      ) : nivelPrimario ? (
        <NivelPrimario />
      ) : nivelSecundario ? (
        <NivelSecundario />
      ) : nivelSuperior ? (
        <Nivelsuperior />
      ) : galeria ? (
        <Galeria />
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
};
