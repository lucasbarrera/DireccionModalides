import "../stylespermanente/edpermanente.css";
import { Footer } from "../../../components/footer/Footer";
import { useState } from "react";
import { Principal } from "./Principal";
import { NivelPrimario } from "./NivelPrimario";
import { NivelSecundario } from "./NivelSecundario";
import { NivelSuperior } from "./NivelSuperior";
import { Galeria } from "./Galeria";
export const EducacionPermanente = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="permanente">
      <div className="contenedorPermanente">
        <img src="./src/assets/imgCoordinaciones/coorpermanente.jpeg" alt="" />
      </div>

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
          Normativa
        </button>
        {/* <button
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
