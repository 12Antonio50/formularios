import React from "react";
import '../css/style.css'
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';



const EliminarFormulario = () => {
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
                Eliminar formularios
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

            <Link to="/formact" className="crear-boton"
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

            <Button
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
                variant="contained"
            >
                Formulario 1
            </Button>

            <Button
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
                variant="contained"
            >
                Formulario 2
            </Button>

        </>
    );
}

export default EliminarFormulario;
