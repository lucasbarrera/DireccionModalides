import "../stylesbilingue/principal.css";
export const PrincipalBilingue = () => {
  return (
    <div className="descripcion">
      <h2 className="titulo">Marco normativo de la Modalidad</h2>
      <p className="texto">
        La modalidad de Educación Intercultural Bilingüe (EIB) es una de las
        modalidades presentes en el sistema educativo nacional y jurisdiccional.
        Pretende garantizar el derecho constitucional de los pueblos indígenas y
        comunidades migrantes a recibir una educación intercultural y/o bilingüe
        que coadyuve a preservar, fortalecer y recrear sus pautas culturales, su
        lengua, sus cosmovisiones, sus tradiciones y sus identidades étnicas,
        que asegure la plena participación y el acceso a los aprendizajes
        fundamentales para el desarrollo personal y la inclusión social en un
        mundo intercultural, y que promueva el reconocimiento y el respeto de
        las diferencias mediante el intercambio de conocimientos y valores entre
        pueblos étnica, lingüística y culturalmente diferentes.
      </p>
      <h3 className="titulo">Marco legal</h3>
      <ul className="lista">
        <li>Constitución Nacional (Art. 75, Inc. 17) </li>
        <li>Ley de Educación Nacional Nº 26.206 - capítulo XI </li>
        <li> Resolución CFE Nº 119/10</li>
        <li>Resolución ME N° 1119/10</li>
        <li>Ley de Educación Provincial Nº 8678/10 - Cap XII, Art. 68 - 71</li>
      </ul>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Documentación</th>
            <th scope="col">Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Resolución CFE N° 119/10</td>
            <td>
              <a
                href="https://drive.google.com/file/d/15cTWHc584DJSd5DDTtNELbKAOxxqv0nv/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Resolución N° 1119</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1V7n4d6mWlUWgmaysHOiC6GqNDfBhvBsQ/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Articulo 75 Constitución Nacional</td>
            <td>
              <a
                href="https://www.congreso.gob.ar/constitucionSeccion1Cap4.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Ley Provincial de Educacion</td>
            <td>
              <a
                href="http://www.boletinoflarioja.com.ar/pdf/2010/2010-02-05.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Ley Nacional de Educacion N° 26.206</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1efyAw0SN8EzasGU215ewS0wJ3Be0fKdw/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
