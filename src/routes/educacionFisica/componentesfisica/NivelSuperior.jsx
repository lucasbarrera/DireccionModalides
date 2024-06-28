import "../stylesfisica/nivelsuperior.css";

export const NivelSuperior = () => {
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
            <td>Diseño Curricular para la Educacion Superior</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1QueQDWaLpfIxXNJwPfsYvLBkpKj-uoxH/view"
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
