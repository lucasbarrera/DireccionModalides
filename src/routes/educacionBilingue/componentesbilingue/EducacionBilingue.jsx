import "../stylesbilingue/edbilingue.css";
import { Footer } from "../../../components/footer/Footer";
import { useState } from "react";
import { PrincipalBilingue } from "./PrincipalBilingue";
import { NivelPrimario } from "./NivelPrimario";
import { NivelSecundario } from "./NivelSecundario";
import { NivelSuperior } from "./NivelSuperior";
import { Galeria } from "./Galeria";
import portadaBilingue from "../../../assets/imgCoordinaciones/coorbilingue.jpeg";
export const EducacionBilingue = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="bilingue">
      <div className="contenedorBilingue">
        <img src={portadaBilingue} alt="" />
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
          Material Didactico
        </button>
        {/* <button
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
        </button> */}
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
      {principal ? (
        <PrincipalBilingue />
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
