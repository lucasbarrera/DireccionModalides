import "../stylesencierro/edprivlib.css";
import { Footer } from "../../../components/footer/Footer";
import { Principal } from "./Principal";
import { NivelPrimario } from "./NivelPrimario";
import { NivelSecundario } from "./NivelSecundario";
import { NivelSuperior } from "./NivelSuperior";
import { Galeria } from "./Galeria";
import { useState } from "react";
export const EducacionPrivlib = () => {
  const [principal, setPrincipal] = useState(true);
  const [nivelPrimario, setNivelPrimario] = useState(false);
  const [nivelSecundario, setNivelSecundario] = useState(false);
  const [nivelSuperior, setNivelSuperior] = useState(false);
  const [galeria, setGaleria] = useState(false);
  return (
    <div className="encierro">
      <div className="contenedorImgPriv">
        <img
          src="./src/assets/imgCoordinaciones/coorcontextencierro.jpeg"
          alt=""
        />
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
          Normativa
        </button>
        <button
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
          Jornada Salud Mental
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
          Conciertos y Tallers
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
          Mujer y Diversidad
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
          Aprendemos Juntos
        </button>
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
