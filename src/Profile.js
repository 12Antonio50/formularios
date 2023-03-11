import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BasePag from './componentes/BasePag';
import Formulariosfinalizados from './componentes/FormulariosF';
import VisualizarRespuestas from './componentes/VisualizarRes';
import FormularioActivo from './componentes/FormActiv';
import EliminarFormulario from './componentes/EliminarForm';
import Borrador from './componentes/Borradores';
import Crear from './componentes/Crear';
import Alumno from './componentes/Alumno';
import Login from './componentes/Login';

const Profile = () => {
      return(
        <>
          <div className='App'>  
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/basepag" element={<BasePag/>}/>
          <Route path="/formulariosfi" element={<Formulariosfinalizados/>}/>
          <Route path="/visualizarr" element={<VisualizarRespuestas/>}/>
          <Route path="/formact" element={<FormularioActivo/>}/>
          <Route path="/eliminar" element={<EliminarFormulario/>}/>
          <Route path="/crear" element={<Crear/>}/>
          <Route path="/borrador" element={<Borrador/>}/>
          <Route path="#/alumno" element={<Alumno/>}/>
        </Routes>
        </div>    
      </>
);
}
export default Profile;
