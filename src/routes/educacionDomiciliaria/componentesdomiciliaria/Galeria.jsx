import "../stylesdomiciliaria/galeria.css";
export const Galeria = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/assets/imagesDomhos/jornadaalfa.jpg"
              className="d-block"
              alt="Jornada de alfabetizacion Hospital M y N"
            />
            <p>Jornada de alfabetizacion Hospital M y N</p>
          </div>
          <div className="carousel-item ">
            <img
              src="./src/assets/imagesDomhos/jornadaalfa1.jpg"
              className="d-block"
              alt="Jornada de alfabetizacion Hospital M y N"
            />
            <p>Jornada de alfabetizacion Hospital M y N</p>
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
    </>
  );
};
