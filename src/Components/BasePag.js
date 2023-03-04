import React from "react";
import '../css/style.css'
import logo from '../img/utc.png';
import Box from '@mui/material/Box';

import { Button } from '@mui/material'


const BasePag = () => {
    return (
        <>
            <div className="magin-up">
                <div className="box-white">
                    <img className="logo-utc" src={logo} alt='for sell'></img>
                </div>
                <div className="magin-donw"></div>
            </div>
            <div className="text-1"
                style={{
                    textAlign: "center",
                    width: 'auto',
                    height: '61px'
                }}>
                Jefe de carrera
            </div>


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

            <Button
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '37%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
                variant="contained"
                href="/Crear"
            >
                Crear formulario
            </Button>

            <Button
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '47%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
                variant="contained"
                href="/borrador"
            >
                Visualizar borradores
            </Button>

            <Button
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '57%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
                variant="contained"
                href="/FormAct"
            >
                Formularios activos
            </Button>

            <Button
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '67%',
                    transform: 'translate(-50%, -50%)',
                    width: '238px',
                    height: '51px',
                    backgroundColor: '#FD7E14'
                }}
                variant="contained"
                href="/FormulariosFi"
            >
                Formulario finalizados
            </Button>


        </>
    );
}

export default BasePag;