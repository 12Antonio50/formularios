import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BasePag from './componentes/BasePag';
import Formulariosfinalizados from './componentes/FormulariosF';
import VisualizarRespuestas from './componentes/VisualizarRes';
import FormularioActivo from './componentes/FormActiv';
import EliminarFormulario from './componentes/EliminarForm';
import Borrador from './componentes/Borradores';
import Crear from './componentes/Crear';
import Alumno from './componentes/Alumno';
import Login from './componentes/Login';

const Profile = () => (
  <>
    <Routes>
      <Route path="/" >
        <Login />
      </Route>
      <Route path="/basepag" >
        <BasePag />
      </Route>
      <Route path="/formulariosfi" >
        <Formulariosfinalizados />
      </Route>
      <Route path="/visualizarr" >
        <VisualizarRespuestas />
      </Route>
      <Route path="/formact">
        <FormularioActivo />
      </Route>
      <Route path="/eliminar" >
        <EliminarFormulario />
      </Route>
      <Route path="/crear" >
        <Crear />
      </Route>
      <Route path="/borrador">
        <Borrador />
      </Route>
      <Route path="/alumno">
      <Alumno />
        </Route> 
    </Routes>
  </>
);
export default Profile;
