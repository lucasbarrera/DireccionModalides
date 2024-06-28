import "../stylesrural/principal.css";

export const Principal = () => {
  return (
    <div>
      <h2 className="titulorural">Ecuadre Político de la Modalidad</h2>
      <p className="descripcion">
        La modalidad de educación rural atraviesa todos los niveles educativos
        obligatorios{" "}
        <a
          href="https://www.argentina.gob.ar/sites/default/files/ley-de-educ-nac-58ac89392ea4c.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          (ley de educación nacional N° 26.206)
        </a>{" "}
        y{" "}
        <a href="http://www.boletinoflarioja.com.ar/pdf/2010/2010-02-05.pdf">
          {" "}
          (ley de educación provincial N° 8.678)
        </a>{" "}
        por lo que requiere un trabajo con una mirada holística que contemple
        las unidades educativas de todos los niveles del sistema educativo que
        pertenezcan al contexto rural tanto de la población dispersa como
        aglomerada -desde un punto de vista demográfico-, a las direcciones
        generales (Inicial, Primario y Secundario), a los programas
        intersectoriales (Crecer Sanos), como así también a sus articulaciones
        con las otras modalidades educativas del Sistema Educativo Provincial.
        <br />
        Desde la modalidad de educación rural se establecen líneas de trabajo
        que se encuentran enmarcadas en las normativas vigentes a nivel nacional
        y provincial y apoyadas en los ejes del Plan Rosario Vera Peñaloza a
        nivel de política educativa provincial.
        <br />
        En este sentido, el marco normativo comprende la ley nacional N°
        26.206/06 (art. 49, 50 y 51), ley de educación provincial N° 8.678/09
        (art. 62, 63, 64 y 65), Resoluciones del Consejo Federal de Educación
        (CFE) N° 109/10, N° 128/10 y resoluciones provinciales, a saber:
      </p>
      <ul className="items">
        <li>
          Creación de los Ciclos Básicos Secundarios Rurales (Resolución N°
          480/11, y su modificatoria N° 438/15).
        </li>
        <li>
          Creación de extensiones áulicas: Resolución N° 0061 (Villa Casana),
          Resolución N° 1087 (Guanchín), Resolución N° 1492 (Bajo Hondo),
          Resolución N° 0447 (Malligasta y Tilimuqui).
        </li>
      </ul>
      <p className="descripcion">
        Haciendo referencia a la dimensión didáctica-pedagógica, la modalidad de
        educación rural considera las decisiones que en este aspecto han tomado
        las direcciones generales de los diferentes niveles educativos
        obligatorios (por ejemplo, la elaboración de la planificación didáctica
        en el marco de la enseñanza ciclada e integrada) considerando y mirando
        el contexto rural y las particularidades que el mismo posee dado que se
        trata de un contexto heterogéneo y específico constituido por la
        enseñanza en el pluriaño/grado/curso.
        <br />
        Con respecto a la dimensión socio-cultural -desde ésta modalidad se
        pretende que- a través de diversos proyectos- las escuelas rurales
        promuevan y fortalezcan sus vínculos con la comunidad local en sus
        diversos aspectos considerando fundamentalmente las orientaciones de la
        escuela rural, en el caso de la educación secundaria, y los diferentes
        proyectos que enfatizan las escuelas de educación primaria como también
        de educación inicial.
      </p>
    </div>
  );
};
