import "../stylesbilingue/galeria.css";
// importacion de imagenes
import conversatorioISDF from "../../../assets/imagesBilingue/conversatorioISFD.jpg";
import paseoalfaISDF from "../../../assets/imagesBilingue/paseoalfaISFD.jpg";
import paseoalfaUPAM from "../../../assets/imagesBilingue/paseoalfaUPAM.jpg";
import tallerefemeridesISFD from "../../../assets/imagesBilingue/tallerefemeridesISFD.jpeg";
import trabajolenguakakan from "../../../assets/imagesBilingue/trabajolenguakakan.jpg";

export const Galeria = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={conversatorioISDF}
              className="d-block"
              alt="Conversatorio ISFD Pedro Ignacio de Castro Barros"
            />
            <p>Conversatorio ISFD Pedro Ignacio de Castro Barros</p>
          </div>
          <div className="carousel-item ">
            <img
              src={paseoalfaISDF}
              className="d-block"
              alt="Paseo Alfabetizador ISFD Pedro Ignacio de Castro Barros"
            />
            <p>Paseo Alfabetizador ISFD Pedro Ignacio de Castro Barros</p>
          </div>
          <div className="carousel-item ">
            <img
              src={paseoalfaUPAM}
              className="d-block"
              alt="Paseo Alfabetizador UPAM"
            />
            <p>Paseo Alfabetizador UPAM</p>
          </div>
          <div className="carousel-item ">
            <img
              src={tallerefemeridesISFD}
              className="d-block"
              alt="Taller Efemerides Interculturales ISFD"
            />
            <p>Taller Efemerides Interculturales ISFD</p>
          </div>
          <div className="carousel-item ">
            <img
              src={trabajolenguakakan}
              className="d-block"
              alt="Trabajo en lengua Kakán Esc N°11"
            />
            <p>Trabajo en lengua Kakán Esc N°11</p>
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
