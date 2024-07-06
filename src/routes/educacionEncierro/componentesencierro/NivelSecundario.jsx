import "../stylesencierro/nivelsecundario.css";
import talleres from "../../../assets/imagesEncierro/conciertos-talleres.jpg";
import talleres1 from "../../../assets/imagesEncierro/conciertos-talleres1.jpg";
import talleres2 from "../../../assets/imagesEncierro/conciertos-talleres2.jpg";

export const NivelSecundario = () => {
  return (
    <div>
      <h2 className="titulo">
        “Ciclos de Conciertos y Talleres Didácticos Express de arte en Contextos
        de Encierro”
      </h2>
      <p className="texto">
        Continuando con las acciones por el mes de la Modalidad de Educación en
        Contextos de Encierro, dependiente de la Dirección General de
        Modalidades Educativas, esta mañana en la Unidad Educativa “Centro de
        Día Amado Feliciano Romero” se realizó una nueva presentación del
        Programa “Ciclos de Conciertos y Talleres Didácticos Express de arte en
        Contextos de Encierro”, la propuesta llega a los estudiantes a través de
        la articulación con la Coordinación de Educación Artística.
        <br /> La intervención Artística-Instrumental, de piezas musicales de
        diferentes lugares del mundo, fue ejecutada por el saxofonista Daniel
        Palacios.b
        <br /> La música nos permite explorar y experimentar emociones e ideas a
        partir de lo que sentimos, vemos y oímos, es por ello que es tan
        importante que forme parte de nuestras aulas.
        <br /> Fue un doble motivo para compartir una mañana distinta y llena de
        emociones ya que también se celebraron los cumpleaños de los
        estudiantes.
      </p>
      <div className="imagenes">
        <img src={talleres} alt="" />
        <img src={talleres1} alt="" />
        <img src={talleres2} alt="" />
      </div>
    </div>
  );
};
