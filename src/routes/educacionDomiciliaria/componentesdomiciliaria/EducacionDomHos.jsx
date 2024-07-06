import "../stylesdomiciliaria/eddomhos.css";
import { Footer } from "../../../components/footer/Footer";
import { PrincipalDomiciliaria } from "./PrincipalDomiciliaria";
import { useState } from "react";
import { NivelPrimario } from "./NivelPrimario";
import { NivelSecundario } from "./NivelSecundario";
import { Galeria } from "./Galeria";
import portadadomiciliaria from "../../../assets/imgCoordinaciones/coordomhos.jpeg";

export const EducacionDomHos = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="domiciliaria">
      <div className="contenedorImgDomHos">
        <img src={portadadomiciliaria} alt="" />
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
            setGaleria(false);
          }}
        >
          Normativa
        </button>
        {/* <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            setNivelPrimario(true);
            setNivelSecundario(false);
            setPrincipal(false);
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
            setGaleria(false);
          }}
        >
          Nivel Secundario
        </button> */}
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            setNivelSecundario(false);
            setNivelPrimario(false);
            setPrincipal(false);
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
        <PrincipalDomiciliaria />
      ) : nivelPrimario ? (
        <NivelPrimario />
      ) : nivelSecundario ? (
        <NivelSecundario />
      ) : galeria ? (
        <Galeria />
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};
