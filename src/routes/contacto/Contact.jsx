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
            href="mailto: barreramenemlucas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            direcciondemodalidades@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};
