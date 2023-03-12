import React from "react";
import '../css/style.css'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const FormularioActivo = () => {
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
                Formularios activos
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

            <Link to="/visualizar" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '40px',
                    backgroundColor: '#FD7E14'
                }}
            >
                <p>Visualizar respuestas</p>
            </Link>

            <Link to="/eliminar" className="crear-boton"
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '60%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '40px',
                    backgroundColor: '#FD7E14'
                }}

            >
                <p>Eliminar formularios publicados</p>
            </Link>
        </>
    );
}

export default FormularioActivo;