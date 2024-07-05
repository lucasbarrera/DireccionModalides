import "../stylesencierro/principal.css";

export const Principal = () => {
  return (
    <div className="principal-encierro">
      <h2>Marco Normativo de la modalidad</h2>
      <p className="texto">
        La Educación en Contextos de Privación de la Libertad / Educación en
        Contextos de Encierro, constituye un escenario altamente complejo para
        la política educativa. El desafío de construir y desarrollar una
        política universal para esta Modalidad, ha supuesto un recorrido de
        avances, dificultades y logros que han permitido legitimar la existencia
        de este contexto particular del sistema educativo provincial. Dicha
        Modalidad centra sus propósitos en garantizar el derecho a la Educación
        de todas las personas privadas de libertad para promover su formación
        integral y desarrollo pleno. Aborda la atención educativa de las
        personas que se encuentran en tres tipos de instituciones diferentes:
      </p>
      <ul className="lista">
        <li>Unidades penales.</li>
        <li>Comisión de delito en institutos cerrados.</li>
        <li>
          Centros de tratamiento de adicciones de régimen cerrado o de
          contención acentuada, y todas aquellas otras instituciones o ámbitos
          donde se encuentren personas privadas de la libertad, razón que les
          impide asistir a las instituciones educativas externas.
        </li>
      </ul>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Documentacion</th>
            <th scope="col">Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Fundamentos Normativos</td>
            <td>
              <a
                href="https://docs.google.com/document/d/1qxVunyM79Qwtx2iDQLDj1fcRALnOc0cg/edit?usp=drive_web&ouid=117658936960944294597&rtpof=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ley de Educacion Provincial</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1DbCyAmWh9mkGZgDKY-nmpy9vCgRlYqxZ/view?usp=drive_open&edoph=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ley de Educacion Nacional</td>
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
          <tr>
            <th scope="row">4</th>
            <td>Escuelas secundarias</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1xZ52JF1EMWSP0POjaXGkuZrUQcUFi3dR/view"
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
