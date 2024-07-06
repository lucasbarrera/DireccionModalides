import "../stylesencierro/nivelsuperior.css";
import mujerydiversidad from "../../../assets/imagesEncierro/mujer-diversidad.jpg";
export const NivelSuperior = () => {
  return (
    <div>
      <h2 className="titulo">Mujer y Diversidad</h2>
      <p className="texto">
        La Modalidad de Educación en Contextos de Encierro dependiente de la
        Dirección General de Modalidades Educativas, en acción articulada con la
        Secretaría de la Mujer y Diversidad, se hace presente en el Hogar de
        Protección Integral: Un nuevo camino, dando así respuesta a la demanda
        educativa solicitada por la población de dicha institución. Es objetivo
        de esta Modalidad garantizar el derecho a la Educación de todas las
        personas y promover su formación integral y desarrollo pleno.
      </p>
      <div className="imagenes">
        <img src={mujerydiversidad} alt="" />
      </div>
    </div>
  );
};
