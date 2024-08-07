import "../stylesencierro/nivelprimario.css";
import saludmental1 from "../../../assets/imagesEncierro/saludmental.jpg";
import saludmental2 from "../../../assets/imagesEncierro/saludmental2.jpg";
import saludmental3 from "../../../assets/imagesEncierro/saludmental3.jpg";
export const NivelPrimario = () => {
  return (
    <>
      <h2 className="titulo-primario">Salud Mental Alfabetizacion</h2>
      <p className="desarrollo-primario">
        En el marco del Plan “Rosario Vera Peñaloza” 2022- 2027, la Coordinadora
        Provincial de la Modalidad de Educación en Contextos de Encierro Lic.
        Fanny Rodríguez junto a la Supervisora de Jóvenes y Adultos Prof. María
        Inés Santander, dieron inicio al Programa Jurisdiccional de
        Alfabetización “Aprendemos Juntos La Rioja” en la Unidad Educativa del
        Servicio de Salud Mental.
        <br /> Dicho programa se constituye en una iniciativa de inclusión
        educativa y social que abarca todos los niveles y modalidades de la
        educación establecidos en la Ley de Educación Nacional 26.206/06.
        <br />
        La propuesta fue trabajar en un espacio de aula taller a partir del
        género literario de la poesía, quizás porque es el más vinculado a la
        belleza del lenguaje, a lo emotivo, a la transmisión de sentimientos. La
        lectura compartida de poemas es una oportunidad para disfrutar, para
        habilitar un espacio diferente, para evocar recuerdos de la infancia.
        Nos invita a imaginar, a volver a jugar con las palabras y las rimas.
      </p>
      <div className="imagenes-primario">
        <img src={saludmental1} alt="" />
        <img src={saludmental2} alt="" />
        <img src={saludmental3} alt="" />
      </div>
    </>
  );
};
