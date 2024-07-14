import "./footer.css";
import imgministerioed from "../../assets/imagenministerio.jpg";
import imgsecges from "../../assets/secGesEdu.jpg";
import imggob from "../../assets/imgGob.jpg";
export const Footer = () => {
  return (
    <>
      <div className="contenedorFooter">
        <div className="imagen">
          <a
            href="https://www.facebook.com/profile.php?id=100064186892813"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgsecges} alt="" />
          </a>
          <p>Secretaria de Gestion Educativa</p>
        </div>
        <div className="imagen">
          <a
            href="https://www.larioja.gov.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imggob} alt="" />
          </a>
          <p>Gobierno de la Provincia de La Rioja</p>
        </div>
        <div className="imagen">
          <a
            href="https://www.facebook.com/educacionlar/?locale2=hr_HR&paipv=0&eav=Afbo9xx6r9DcTeczM503qIvw-MPeBRXNosqH5-HjC5dHQmweWm9ps3hpV9bFcHNsUmw&_rdr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={imgministerioed} alt="" />
          </a>
          <p>Ministerio de Educacion </p>
        </div>
      </div>
    </>
  );
};
