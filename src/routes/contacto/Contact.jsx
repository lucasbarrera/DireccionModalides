import "./contacto.css";
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
            direcciondemodalidadeslarioja@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
