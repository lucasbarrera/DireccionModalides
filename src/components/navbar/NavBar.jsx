import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Dir. de Mod. Educativas
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link ">
                  Principal
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/noticias"
                  className="nav-link "
                  aria-current="page"
                >
                  Noticias
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Modalidades
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/educacionartistica"
                      className="dropdown-item"
                      href="#"
                    >
                      Modalidad Ed. Artistica
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionfisica"
                      className="dropdown-item"
                      href="#"
                    >
                      Modalidad Ed. Fisica
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionrural"
                      className="dropdown-item"
                      href="#"
                    >
                      Modalidad Educacion Rural
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionespecial"
                      className="dropdown-item"
                      href="#"
                    >
                      Modalidad Educacion Especial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionpermanente"
                      className="dropdown-item"
                      href="#"
                    >
                      Mod Ed Permanente de Jovenes y Adultos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionbilingue"
                      className="dropdown-item"
                      href="#"
                    >
                      Mod Ed Intercultural Bilingüe.
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educacionprivlib"
                      className="dropdown-item"
                      href="#"
                    >
                      Mod Ed en Contextos de Encierro
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/educaciondomiciliaria"
                      className="dropdown-item"
                      href="#"
                    >
                      Mod Ed Domiciliaria y Hospitalaria
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link "
                  aria-current="page"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Busqueda"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form> */}
        </div>
      </nav>
    </>
  );
};
