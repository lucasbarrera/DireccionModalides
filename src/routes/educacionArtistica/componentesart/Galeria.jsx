import "../estilosarte/galeria.css";
export const Galeria = () => {
  return (
    <div className="galeria">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/assets/pinturas/dali.jpg"
              className="d-block"
              alt="La persistencia de la memoria"
            />
            <p>La presistencia de la memoria</p>
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/pinturas/kanagawa.jpg"
              className="d-block"
              alt="La gran hola"
            />
            <p>Kanagwa</p>
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/pinturas/vangho.jpg"
              className="d-block"
              alt="La noche estrellada"
            />
            <p>La noche estrellada</p>
          </div>
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
  );
};
