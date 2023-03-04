import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BasePag from './Components/BasePag';
import Login from './Components/Login';
import Formulariosfinalizados from './Components/FormulariosF';
import VisualizarRespuestas from './Components/VisualizarRes';
import FormularioActivo from './Components/FormActiv';
import EliminarFormulario from './Components/EliminarForm';
import Borrador from './Components/Borradores';
import Crear from './Components/Crear';
import Alumno from './Components/Alumno';


function App() {
  return (

    <Routes>
     <Route path="/" element={<BasePag />} />
     <Route path="/BasePag" element={<Login />} />
     <Route path="/FormulariosFi" element={<Formulariosfinalizados />} />
     <Route path="/VisualizarR" element={<VisualizarRespuestas />} />
     <Route path="/FormAct" element={<FormularioActivo />} />
     <Route path="/Eliminar" element={<EliminarFormulario />} />
     <Route path="/Crear" element={<Crear />} />
     <Route path="/borrador" element={<Borrador />} />
     <Route path="/alumno" element={<Alumno />} />
    </Routes>

  );
}
export default App;
