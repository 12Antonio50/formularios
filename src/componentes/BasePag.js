import React from "react";
import '../css/style.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const BasePag = () => {
    return (
        <>

            <div className="text-1"
                style={{
                    textAlign: "center",
                    width: 'auto',
                    height: '61px'
                }}>
                Jefe de carrera
            </div>

            <Link to="/" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '90%',
                    top: '8%',
                    transform: 'translate(-50%, -50%)',
                    width: '160px',
                    height: '40px',
                    backgroundColor: '#0B1A61'
                }}
            >
                <p>Cerrar sesión</p>
            </Link>
            <Box
                sx={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '57%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    height: 500,
                    backgroundColor: 'White',

                }}

            />

            <Link to="/crear" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Crear formulario</p>
            </Link>

            <Link to="/borrador" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Visualizar borradores</p>
            </Link>

            <Link to="/formact" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '60%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Formularios activos</p>
            </Link>

            <Link to="/formulariosfi" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '70%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Formularios finalizados</p>
            </Link>


        </>
    );
}

export default BasePag;