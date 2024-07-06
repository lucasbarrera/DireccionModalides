import "./contacto.css";
import sobre from "../../assets/mail.jpg";
import { Footer } from "../../components/footer/Footer";
export const Contact = () => {
  return (
    <div className="contacto">
      <div className="contenedorContacto">
        <p>
          Para comunicarte con la direccion puedes enviar un email a la
          dirección de modalidades.
          <a
            href="mailto: direcciondemodalidadeslarioja@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sobre">
              <img src={sobre} alt="" />
              direcciondemodalidadeslarioja@gmail.com
            </div>
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
