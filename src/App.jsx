import { NavBar } from "./components/navbar/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./routes/home/Home";
import { Contact } from "./routes/contacto/Contact";
import { Educacionartistica } from "./routes/educacionArtistica/componentesart/Educacionartistica";
import { EducacionFisica } from "./routes/educacionFisica/componentesfisica/EducacionFisica";
// import { Noticias } from "./routes/noticias/Noticias";
import { EducacionRural } from "./routes/educacionRural/componentesrural/EducacionRural";
import { EducacionEspecial } from "./routes/educacionEspecial/componentesespecial/EducacionEspecial";
import { EducacionPermanente } from "./routes/educacionPermanente/componentesjovenes/EducacionPermanente";
import { EducacionBilingue } from "./routes/educacionBilingue/componentesbilingue/EducacionBilingue";
import { EducacionPrivlib } from "./routes/educacionEncierro/componentesencierro/EducacionPrivlib";
import "./App.css";
import { EducacionDomHos } from "./routes/educacionDomiciliaria/componentesdomiciliaria/EducacionDomHos";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/noticias" element={<Noticias></Noticias>}></Route> */}
        <Route
          path="/educacionfisica"
          element={<EducacionFisica></EducacionFisica>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/educacionartistica"
          element={<Educacionartistica />}
        ></Route>
        <Route path="/educacionrural" element={<EducacionRural />}></Route>
        <Route
          path="/educaciondomiciliaria"
          element={<EducacionDomHos />}
        ></Route>
        <Route path="/educacionprivlib" element={<EducacionPrivlib />}></Route>
        <Route
          path="/educacionbilingue"
          element={<EducacionBilingue />}
        ></Route>
        <Route
          path="/educacionpermanente"
          element={<EducacionPermanente />}
        ></Route>
        <Route
          path="/educacionespecial"
          element={<EducacionEspecial />}
        ></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  );
}
export default App;
