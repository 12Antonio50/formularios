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
import { unstable_HistoryRouter } from 'react-router-dom';

export default function Profile ()  {
  const history = unstable_HistoryRouter()
  return(
      <>
      <BrowserRouter>
          <div className='App'>  
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path={history.push('/basepag')} element={<BasePag/>}/>
          <Route path="/formulariosfi" element={<Formulariosfinalizados/>}/>
          <Route path="/visualizarr" element={<VisualizarRespuestas/>}/>
          <Route path="/formact" element={<FormularioActivo/>}/>
          <Route path="/eliminar" element={<EliminarFormulario/>}/>
          <Route path="/crear" element={<Crear/>}/>
          <Route path="/borrador" element={<Borrador/>}/>
          <Route path={history.push('/alumno')} element={<Alumno/>}/>
        </Routes>
        </div>    
        </BrowserRouter>
      </>
);
}

