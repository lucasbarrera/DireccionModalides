import "../stylesfisica/nivelsecundario.css";

export const NivelSecundario = () => {
  return (
    <div>
      {" "}
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
            <td>Diseño Curricular para la Educacion Secundaria</td>
            <td>
              <a
                href="https://drive.google.com/file/d/1OEPT_btoX1FwbwT0IvwzrvTpy89AzahB/view"
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
