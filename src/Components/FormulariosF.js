import React from "react";
import '../css/style.css'
import logo from '../img/utc.png';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import Boton from './Boton'

const FormulariosF = () => {
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
                    left: '50%',
                    top: '21%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: "center",
                    width: 'auto',
                    height: '61px',
                    position: 'absolute'
                }}>
                Formularios finalizados
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
                    backgroundColor: 'White'

                }}

            />
            <input type="text" value="Nombre del formulario" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '45%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Nombre del formulario" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '55%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Nombre del formulario" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '65%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>
            <Button
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
                variant="contained"
                href="/"
            >
                Regresar
            </Button>

            <Button
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '20%',
                    top: '90%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '40px',
                    backgroundColor: '#FD7E14'
                }}
                variant="contained"
                href="/VisualizarR"
            >
                Visualizar
            </Button>


            <Boton
                nameClass="volverp"
                text="VOLVER A PUBLICAR Y COMPARTIR"
                id={2}
            />

        </>
    );
}

export default FormulariosF;