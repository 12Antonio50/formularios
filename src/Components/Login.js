import React from "react";
import '../css/style.css';
import logo from '../img/utc.png';
import { Button } from '@mui/material'


function Login() {
    return (

        <div className="magin-up">
            <div className="box-white">
                <img className="logo-utc" src={logo} alt='for sell'></img>
            </div>
            <div className="texto"><h1 className="text-one"> FORMULARIO DE EVALUACIÓN DE LOS DOCENTES</h1></div>
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
                    left: '90%',
                    top: '8%',
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
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '90%',
                    top: '90%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '40px',
                    backgroundColor: '#0B1A61'
                }}
                variant="contained"
                href="/BasePag"
            >
                Inicio
            </Button>
            </div>
            <div className="magin-donw"></div>
        </div>

    );
}

export default Login;