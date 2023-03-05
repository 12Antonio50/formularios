import React from "react";
import '../css/style.css'
import Boton from './boton';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material'
import logo from '../img/utc.png';

export default function Crear() {
    const mostrar = () => {
        document.getElementById('opcion').style.display = 'block';
    };
    const ocultar = () => {
        document.getElementById('opcion1').style.display = 'none';
    };
    const ocultar1 = () => {
        document.getElementById('opcion2').style.display = 'none';
    };
    const ocultar2 = () => {
        document.getElementById('opcion3').style.display = 'none';
    };
    const mostrarpanel1 = () => {
        document.getElementById('opcion1').style.display = 'block';
    };
    const mostrarpanel2 = () => {
        document.getElementById('opcion2').style.display = 'block';
    };
    const mostrarpanel3 = () => {
        document.getElementById('opcion3').style.display = 'block';
    };
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '50%',
                    top: '59%',
                    transform: 'translate(-50%, -50%)',
                    width: 1000,
                    height: 500,
                    backgroundColor: '#0B1A61',

                }}
            />
            <div className="magin-up">
                <div className="box-white">
                    <img className="logo-utc" src={logo} alt='for sell'></img>
                </div>
                <div className="magin-donw"></div>
            </div>
            <div className="text-1"
                style={{
                    fontsize: '50px',
                    lineheight: '61px'
                }}>
                Crear formulario


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
                href="/BasePag"
            >
                Regresar
            </Button>
            <Boton
                onClick={mostrar}
                nameClass="crear"
                text="CREAR NUEVO FORMULARIO"
                id={7}
            />

            <div id="opcion"
                style={{
                    display: 'none'
                }}>
                <div className="text-1"
                    style={{
                        fontsize: '50px',
                        lineheight: '61px',
                        position: 'absolute',
                        left: '6%',
                        top: '30%',
                        transform: 'translate(-50 %, -50 %)'
                    }}>
                    Tipos de respuestas
                </div>
                <Box
                    sx={{
                        textAlign: "center",
                        position: 'absolute',
                        left: '15%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        height: 60,
                        backgroundColor: 'White',

                    }}

                />
                <Boton
                    onClick={mostrarpanel1}
                    nameClass="op"
                    text="OPCIÓN"
                    id={8}
                />
                <Boton
                    onClick={mostrarpanel2}
                    nameClass="abierta"
                    text="ABIERTA"
                    id={9}
                />
                <Boton
                    onClick={mostrarpanel3}
                    nameClass="escala"
                    text="ESCALA"
                    id={10}
                />

            </div>
            <div
                id="opcion2"
                style={{
                    display: 'none'
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        position: 'absolute',
                        left: '50%',
                        top: '70%',
                        transform: 'translate(-50%, -50%)',
                        width: 1000,
                        height: 300,
                        backgroundColor: 'White',

                    }}
                />
                <input type="text" value="Nombre del formulario" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '58%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>

                <input type="text" value="1.- Escriba su pregunta" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '68%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <input type="text"
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '78%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <input type="number"
                    style={{
                        position: 'absolute',
                        left: '80%',
                        top: '85%',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <h2
                    style={{
                        position: 'absolute',
                        left: '75%',
                        top: '86%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    Puntos
                </h2>
                <Boton
                    nameClass="ed"
                    text="EDITAR"
                    id={11}
                />
                <Boton
                    nameClass="eliminar"
                    text="ELIMINAR"
                    id={12}
                />
                <Boton
                    onClick={ocultar1}
                    nameClass="guardar"
                    text="GUARDAR"
                    id={13}
                />
            </div>

            <div
                id="opcion1"
                style={{
                    display: 'none'
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        position: 'absolute',
                        left: '50%',
                        top: '70%',
                        transform: 'translate(-50%, -50%)',
                        width: 1000,
                        height: 300,
                        backgroundColor: 'White',

                    }}
                />
                <input type="text" value="Nombre del formulario" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '58%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>

                <input type="text" value="1.- Escriba su pregunta" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '68%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <div
                    style={{
                        position: 'absolute',
                        left: '25%',
                        top: '80%',
                        transform: 'translate(-50%, -50%)',

                    }}
                >
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Respuetas</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >

                            <FormControlLabel value="1" control={<Radio />} label="" />
                            <FormControlLabel value="2" control={<Radio />} label="" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <input type="text" value="1.- Escriba la pregunta" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '68%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <input type="text"
                    style={{
                        position: 'absolute',
                        left: '32%',
                        top: '79%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '30px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <input type="text"
                    style={{
                        position: 'absolute',
                        left: '32%',
                        top: '84%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '30px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>

                <input type="number"
                    style={{
                        position: 'absolute',
                        left: '80%',
                        top: '85%',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <h2
                    style={{
                        position: 'absolute',
                        left: '75%',
                        top: '86%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    Puntos
                </h2>
                <Boton
                    nameClass="ed"
                    text="EDITAR"
                    id={14}
                />
                <Boton
                    nameClass="eliminar"
                    text="ELIMINAR"
                    id={15}
                />
                <Boton
                    onClick={ocultar}
                    nameClass="guardar"
                    text="GUARDAR"
                    id={16}
                />
            </div>


            <div
                id="opcion3"
                style={{
                    display: 'none'
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        position: 'absolute',
                        left: '50%',
                        top: '70%',
                        transform: 'translate(-50%, -50%)',
                        width: 1000,
                        height: 300,
                        backgroundColor: 'White',

                    }}
                />
                <input type="text" value="Nombre del formulario" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '58%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>

                <input type="text" value="1.- Escriba su pregunta" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '68%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <div
                    style={{
                        position: 'absolute',
                        left: '32%',
                        top: '80%',
                        transform: 'translate(-50%, -50%)',

                    }}
                >
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Respuestas</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Muy bien" control={<Radio />} label="Muy bien" />
                            <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                            <FormControlLabel value="Mal" control={<Radio />} label="Mal" />

                        </RadioGroup>
                    </FormControl>
                </div>
                <input type="text" value="1.- Escriba la pregunta" readOnly
                    style={{
                        position: 'absolute',
                        left: '35%',
                        top: '68%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>

                <input type="number"
                    style={{
                        position: 'absolute',
                        left: '80%',
                        top: '85%',
                        transform: 'translate(-50%, -50%)',
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#FFFF'
                    }}
                ></input>
                <h2
                    style={{
                        position: 'absolute',
                        left: '75%',
                        top: '86%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    Puntos
                </h2>
                <Boton
                    nameClass="ed"
                    text="EDITAR"
                    id={17}
                />
                <Boton
                    nameClass="eliminar"
                    text="ELIMINAR"
                    id={18}
                />
                <Boton
                    onClick={ocultar2}
                    nameClass="guardar"
                    text="GUARDAR"
                    id={19}
                />
            </div>

        </>
    );
}

