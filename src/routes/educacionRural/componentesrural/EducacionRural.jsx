import "../stylesrural/edrural.css";
import { Footer } from "../../../components/footer/Footer";
import { useState } from "react";
import { Principal } from "./Principal";
import { Nivelprimario } from "./Nivelprimario";
import { NivelSecundario } from "./NivelSecundario";
import { Galeria } from "./Galeria";
import { NivelSuperior } from "./NivelSuperior";

export const EducacionRural = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="rural">
      <div className="contenedorimg">
        <img
          className="imagenRural"
          src="./src/assets/imgCoordinaciones/coorrural.jpeg"
          alt=""
        />
      </div>
      <h1 className="titulo3">Modalidad de Educacion Rural</h1>
      <div className="botonesNav">
        <button
          className="btn"
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
        <button
          type="button"
          className="btn"
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
          className="btn"
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
          className="btn"
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
          className="btn"
          onClick={() => {
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
      {principal ? (
        <Principal />
      ) : nivelPrimario ? (
        <Nivelprimario />
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
