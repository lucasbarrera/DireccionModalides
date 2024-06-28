import "../stylesdomiciliaria/galeria.css";
export const Galeria = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/assets/imagesDomhos/dom/01.jpg"
              className="d-block  imgcarousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/02.jpg"
              className="d-block  imgcarousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/03.jpg"
              className="d-block  imgcarousel"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/04.jpg"
              className="d-block  imgcarousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/05.jpg"
              className="d-block  imgcarousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/06.jpg"
              className="d-block imgcarousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/07.jpg"
              className="imgcarousel d-block "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/08.jpg"
              className="imgcarousel d-block "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/imagesDomhos/dom/09.jpg"
              className=" imgcarousel d-block "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
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
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
