import "./home.css";
import { Footer } from "../../components/footer/Footer";
export const Home = () => {
  return (
    <div className="home">
      <div className="contenedorImg">
        <img
          className="imagenHome"
          src="./src/assets/imgCoordinaciones/frente-direccion.jpeg"
          alt=""
        />
      </div>
      <h2 className="home-titulo">
        Encuadre político-educativo de la Dirección General de Modalidades
        Educativas
      </h2>
      <div className="descripcion">
        <p>
          Sabemos que la educación constituye un bien público y a la vez un
          derecho personal y social garantizado por el Estado en todos los
          niveles educativos y en todas sus modalidades.
          <br /> Las Modalidades Educativas en la provincia de La Rioja
          acompañan en su concepción a los principios de política educativa
          presentes en los postulados, que para la organización y misión del
          sistema educativo plantea la Ley de Educación Nacional 26.206/ 06, que
          en el art. 17 las define como aquellas “opciones organizativas y/o
          curriculares de la educación común dentro de uno o más niveles
          educativos que procuran dar respuesta a requerimientos específicos de
          formación y atención a particularidades permanentes o temporales,
          personales y/o contextuales, para garantizar la igualdad en el derecho
          a la educación y cumplir con las exigencias legales, técnicas y
          pedagógicas de los diferentes niveles educativos”. En la Ley de
          Educación Nacional tales modalidades son:
        </p>
        <ul className="items">
          <li>La educación técnico profesional.</li>
          <li>La educación artística.</li>
          <li>La educación especial.</li>
          <li>La educación permanente de jóvenes y adultos.</li>
          <li>La educación rural.</li>
          <li>La educación intercultural bilingüe.</li>
          <li>La educación en contextos de privación de la libertad.</li>
          <li>La educación domiciliaria y hospitalaria.</li>
          <li>La Educación Física</li>
        </ul>
      </div>
      <div className="organigramaGral">
        <h2>Organigrama de Trabajo</h2>
        <h3>⁜ Secretaria de Gestion Educativa</h3>
        <h5>Lic. Zoraida Rodriguez</h5>
        <h3>⁜ Direccion Gral de Modalidades educativas</h3>
        <h4>⁜ Director General</h4>
        <h5>Lic. Miguel Soria</h5>
        <h4>⁜ Coord. Modalidad de Educación Especial</h4>
        <h5>Lic. Mariela Flores</h5>
        <h4>⁜ Coord. Modalidad de Educación Física</h4>
        <h5>Lic. Pablo Rosales</h5>
        <h4>⁜ Coord. Modalidad de Educación Artística</h4>
        <h5>Lic. Ma. José Euliarte</h5>
        <h4>
          ⁜ Coord. Modalidad de Educación Permanente para Jóvenes y Adultos
        </h4>
        <h5>Prof. Liliana Vallejo</h5>
        <h4>⁜ Coord. Modalidad de Educación Rural</h4>
        <h5>Prof. Nicolás Vega</h5>
        <h4>⁜ Coord. Modalidad de Educación en Contextos de Encierro</h4>
        <h5>Lic. Fanny Rodríguez</h5>
        <h4>⁜ Coord. Modalidad de Educación Intercultural Bilingüe</h4>
        <h5>Lic. Laura Guzmán</h5>
        <h4>⁜ Coord. Modalidad de Educación Domiciliaria y Hospitalaria</h4>
        <h5>Lic. Rosalba Torres</h5>
        <h4>⁜ Referente de Alfabetización</h4>
        <h5>Prof. María Verónica Zalazar</h5>
        <h4>⁜ ÁreaResponsable Contable</h4>
        <h5>Cra. Silvia ….</h5>
        <h4>⁜ Responsables Administrativas</h4>
        <h5>
          Prof. Eugenia Quiroga
          <br />
          Tec. Paola Rojas
        </h5>
        <h4>⁜ Responsable de Personal</h4>
        <h5>Lic. Mario Carrizo</h5>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
