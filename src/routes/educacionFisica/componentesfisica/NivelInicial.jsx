import "../stylesfisica/nivelinicial.css";
export const NivelInicial = () => {
  return (
    <div>
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
            <td>Diseño Curricular para la Educacion Inicial</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1Od1fe1MoJZTsf758erOigFqqV3X6uhpx/view"
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
