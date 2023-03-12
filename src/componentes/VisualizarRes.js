import React from "react";
import '../css/style.css'
import Box from '@mui/material/Box';
import Boton from './boton'
import { Link } from 'react-router-dom';


const VisualizarRespuestas = () => {
    return (
        <>
            <div className="text-1"
                style={{
                    left: '50%',
                    top: '21%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: "center",
                    width: 'auto',
                    height: '61px',
                    position: 'absolute'
                }}>
                Visualización de respuestas
            </div>


            <Box
                sx={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '57%',
                    transform: 'translate(-50%, -50%)',
                    width: 700,
                    height: 500,
                    backgroundColor: 'White'

                }}

            />
            <input type="text" value="Nombre del formulario" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '39%',
                    transform: 'translate(-50%, -50%)',
                    width: '200px',
                    height: '40px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Pregunta 1" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '43%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Pregunta 2" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '43%',
                    top: '60%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <Link to="/basepag" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '90%',
                    top: '8%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '40px',
                    backgroundColor: '#0B1A61'
                }}
            >
                <p>inicio</p>
            </Link>

            <Link to="/formulariosfi" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '10%',
                    top: '90%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Formularios finalizados</p>
            </Link>

            <Link to="/formact" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '90%',
                    top: '90%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Formularios activos</p>
            </Link>

            <Boton
                nameClass="respueta1"
                text="Respuesta"
                id={3}
            />
            <Boton
                nameClass="respueta2"
                text="Respuesta"
                id={4}
            />

        </>
    );
}

export default VisualizarRespuestas;