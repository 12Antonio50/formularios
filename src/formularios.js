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
import './css/style.css';
import logo from './img/utc.png';
import { Button } from '@mui/material';

class formulario extends React.Component {
  render() {
    const ocultar = () => {
      document.getElementById('opcion1').style.display = 'none';
    };
    return (
      <>
        <div className="magin-up" id="opcion1">
          <div className="text-1"
            style={{
              left: '50%',
              top: '8%',
              transform: 'translate(-50%, -50%)',
              textAlign: "center",
              width: 'auto',
              height: '61px',
              position: 'absolute'
            }}>
            FORMULARIO DE EVALUACION DE LOS DOCENTES
          </div>
          <div className="box-white">

            <img className="logo-utc" src={logo} alt='for sell'></img>
          </div>

          <div className="page-two">
            <div className="box">
              <div className="office">
                <p>Iniciar sesión con Office 365</p>
                <button className="button-365" >Iniciar sesión</button>
              </div>

            </div>
            <Button
              style={{
                textAlign: "center",
                position: 'absolute',
                left: '43%',
                top: '80%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '40px',
                backgroundColor: '#0B1A61'
              }}
              variant="contained"
              href="/alumno"
            >
              Alumno
            </Button>

            <Button
              onClick={ocultar}
              style={{
                textAlign: "center",
                position: 'absolute',
                left: '57%',
                top: '80%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '40px',
                backgroundColor: '#0B1A61'
              }}
              variant="contained"
              href="/basepag"
            >
              Inicio
            </Button>
          </div>
          <div className="magin-donw"></div>
        </div>


        <Routes>
          <Route exact path="/basepag" element={<BasePag />} />
          <Route exact path="/formulariosfi" element={<Formulariosfinalizados />} />
          <Route exact path="/visualizarr" element={<VisualizarRespuestas />} />
          <Route exact path="/formact" element={<FormularioActivo />} />
          <Route exact path="/eliminar" element={<EliminarFormulario />} />
          <Route exact path="/crear" element={<Crear />} />
          <Route exact path="/borrador" element={<Borrador />} />
          <Route exact path="/alumno" element={<Alumno />} />
        </Routes>

 

      </>
    );
  }
}
export default formulario;