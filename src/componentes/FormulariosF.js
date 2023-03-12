import React from "react";
import '../css/style.css'
import Box from '@mui/material/Box';
import Boton from './boton'
import { Link } from 'react-router-dom';

const FormulariosF = () => {
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
                    left: '20%',
                    top: '90%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '40px',
                    backgroundColor: '#FD7E14'
                }}
            >
              <p>Visualizar</p>
            </Link>
            <Boton
                nameClass="volverp"
                text="VOLVER A PUBLICAR Y COMPARTIR"
                id={2}
            />

        </>
    );
}

export default FormulariosF;