import React from "react";
import './css/style.css';
import logo from './img/utc.png';
import { Link } from 'react-router-dom';


function App() {
    return (
        <>
        <div className="magin-up">
            <div className="box-white">
                <img className="logo-utc" src={logo} alt='for sell'></img>
            </div>

            <div className="page-two">
           
                <div className="box">
                     
                    <div className="office">
                        
                        <p>Iniciar sesión con Office 365</p>
                        <button className="button-365" onClick="login()">Iniciar sesión</button>
                    </div>

                </div>
                <Link to="/alumno" className="guardar"
                    style={{
                        left: '43%',
                        top: '85%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <p>Alumno</p>
                </Link>
                <Link to="/basepag  " className="guardar"
                    style={{
                        left: '57%',
                        top: '85%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <p>Jefe de carrera</p>
                </Link>

            </div>
            <div className="magin-donw"></div>
        </div>
        </>
    );
}

export default App;