import "../stylesencierro/galeria.css";
import aprendemosjuntos from "../../../assets/imagesEncierro/aprendemos-juntos.jpg";
import aprendemosjuntos1 from "../../../assets/imagesEncierro/aprendemos-juntos1.jpg";
export const Galeria = () => {
  return (
    <div>
      <h2 className="titulo">Aprendemos Juntos La Rioja</h2>
      <p className="texto">
        El dia 16 de MayoDio inicio al Programa Jurisdiccional de Alfabetización
        “Aprendemos Juntos La Rioja” en la Unidad Educativa del Servicio
        Penitenciario Provincial. Dicho programa se constituye en una iniciativa
        de inclusión educativa y social que abarca todos los niveles y
        modalidades de la educación establecidos en la Ley de Educación Nacional
        26.206/06 y busca sostener una educación pública de calidad contemplando
        la incorporación de diversos dispositivos pedagógico - didácticos que
        permitan trabajar y reorganizar las dimensiones organizacional,
        curricular y didáctico en los diferentes niveles y modalidades del
        sistema educativo.
        <br /> La propuesta fue trabajar en un espacio de aula taller coordinado
        por la Lic. Fanny Rodríguez y la docente Soledad Gallo, integrante del
        equipo técnico. Donde se compartieron textos literarios del escritor
        Eduardo Galeano, promoviendo espacios de conversación con el objetivo de
        un encuentro personal y a la vez colectivo con la lectura y la
        escritura.
        <br /> También en el marco del Programa Jurisdiccional de Alfabetización
        “Aprendemos Juntos La Rioja” se dio inicio al taller Números con
        sentido, el mismo tiene el propósito de fortalecer la alfabetización
        matemática. Esta iniciativa educativa está orientada a enriquecer las
        experiencias de aprendizaje matemático para los estudiantes de nivel
        secundario.
      </p>
      <div className="imagenes">
        <img src={aprendemosjuntos} alt="" />
        <img className="segunda" src={aprendemosjuntos1} alt="" />
      </div>
    </div>
  );
};
