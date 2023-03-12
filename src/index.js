import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import BasePag from './componentes/BasePag';
import Formulariosfinalizados from './componentes/FormulariosF';
import VisualizarRespuestas from './componentes/VisualizarRes';
import FormularioActivo from './componentes/FormActiv';
import EliminarFormulario from './componentes/EliminarForm';
import Borrador from './componentes/Borradores';
import Crear from './componentes/Crear';
import Alumno from './componentes/Alumno';




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <div className='App'>  
          <Routes>
          <Route path="/" element={<App/>}/>
            <Route path="/basepag" element={<BasePag/>}/>
            <Route path="/formulariosfi" element={<Formulariosfinalizados/>}/>
            <Route path="/visualizar" element={<VisualizarRespuestas/>}/>
            <Route path="/formact" element={<FormularioActivo/>}/>
            <Route path="/eliminar" element={<EliminarFormulario/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/borrador" element={<Borrador/>}/>
            <Route path="/alumno" element={<Alumno/>}/>
          </Routes>
          </div>   
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();