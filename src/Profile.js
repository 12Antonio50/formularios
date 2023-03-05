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
      <Route  path="/" >
        <Login />
      </Route>
      <Route exact path="/basepag" >
        <BasePag />
      </Route>
      <Route exact path="/formulariosfi" >
        <Formulariosfinalizados />
      </Route>
      <Route exact path="/visualizarr" >
        <VisualizarRespuestas />
      </Route>
      <Route exact path="/formact">
        <FormularioActivo />
      </Route>
      <Route exact path="/eliminar" >
        <EliminarFormulario />
      </Route>
      <Route exact path="/crear" >
        <Crear />
      </Route>
      <Route exact path="/borrador">
        <Borrador />
      </Route>
      <Route exact path="/alumno">
      <Alumno />
        </Route> 
    </Routes>
  </>
);
export default Profile;
