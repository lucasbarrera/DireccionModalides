import "../estilosarte/edartistica.css";
import { Footer } from "../../../components/footer/Footer";
import { PrincipalArtistica } from "./principalArtistica";
import { NivelPrimario } from "./NivelPrimario";
import { NivelSecundario } from "./NivelSecundario";
import { useState } from "react";
import { NivelSuperior } from "./NivelSuperior";
import { Galeria } from "./Galeria";
import portadaArtistica from "../../../assets/imgCoordinaciones/coorartistica.jpeg";
export const Educacionartistica = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);

  return (
    <div className="artistica">
      <div className="contenedorImagenArt">
        <img src={portadaArtistica} alt="" />
      </div>
      <div className="botonesNavart">
        <button
          className="btn  "
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
          className="btn  "
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
          className="btn  "
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
          className="btn  "
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
          className="btn  "
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
        <PrincipalArtistica />
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
