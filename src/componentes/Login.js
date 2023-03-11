import React from "react";
import '../css/style.css';
import logo from '../img/utc.png';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


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
                        <button className="button-365" onClick="login()">Iniciar sesión</button>
                    </div>
                    
                </div>
              "
                <Link to="/basepag" className="guardar">
                    Save
                </Link>

            </div>
            <div className="magin-donw"></div>
        </div>

    );
}

export default Login;