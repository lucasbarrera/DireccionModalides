import "./noticias.css";
import { Footer } from "../../components/footer/Footer";
export const Noticias = () => {
  return (
    <div className="contenedorPrincipalNot">
      <div className="contenedorNoticia">
        <div className="imagenNoticia">
          <img
            src="./src/assets/noticias-globales.png"
            alt="imagen de la noticia"
          />
        </div>
        <div className="textoNoticia">
          <h4>Titulo de la Noticia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel
            quae culpa fuga quisquam eum suscipit alias natus! Laudantium enim
            eaque quae architecto inventore! Qui cumque ea maiores doloremque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            distinctio praesentium quod quaerat amet id error eligendi minus
            debitis est aperiam accusamus, nesciunt fugiat quae ratione iusto
            mollitia ullam iste? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quas aperiam suscipit quia magni repellat
            molestias sit quidem eligendi vel, asperiores, iure laudantium
            veniam odio illum id fugit incidunt ea quo!
          </p>
        </div>
      </div>
      <div className="contenedorNoticia">
        <div className="imagenNoticia">
          <img
            src="./src/assets/noticias-globales.png"
            alt="imagen de la noticia"
          />
        </div>
        <div className="textoNoticia">
          <h4>Titulo de la Noticia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel
            quae culpa fuga quisquam eum suscipit alias natus! Laudantium enim
            eaque quae architecto inventore! Qui cumque ea maiores doloremque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            distinctio praesentium quod quaerat amet id error eligendi minus
            debitis est aperiam accusamus, nesciunt fugiat quae ratione iusto
            mollitia ullam iste? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quas aperiam suscipit quia magni repellat
            molestias sit quidem eligendi vel, asperiores, iure laudantium
            veniam odio illum id fugit incidunt ea quo!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
