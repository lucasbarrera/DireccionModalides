import "../stylesfisica/nivelprimario.css";

export const NivelPrimario = () => {
  return (
    <div>
      <h3>Diseño Curricular Provincial para la Educacion Primario</h3>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Primer Ciclo</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1BHYOUbgYpCLdP-YA37tNWxhNTKIB4oPP/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Segundo Siclo</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1ChSRWLfmQ-N3nJa_YSpYPr6WTdzj0iXL/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Ver</button>
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Tercer Ciclo</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1IFBB13la6LQDOucwsCrDf52dS-sWDI47/view"
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
