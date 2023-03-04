import React from "react";
import '../css/style.css'
import logo from '../img/utc.png';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import Boton from './Boton'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';




export default function Borrador() {
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
                Visualización de preguntas
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

            <Box sx={{

                textAlign: "center",
                position: 'absolute',
                left: '50%',
                top: '39%',
                transform: 'translate(-50%, -50%)',
                width: '400',
                height: '50px',
            }}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Seleccionar formulario
                    </InputLabel>
                    <NativeSelect
                        defaultValue={0}
                        inputProps={{
                            name: 'Seleccionar formulario',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={0}></option>
                        <option value={10}>Formulario 1</option>
                        <option value={20}>Formulario 2</option>
                        <option value={30}>Formulario 3</option>
                    </NativeSelect>
                </FormControl>
            </Box>


            <input type="text" value="Pregunta 1" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '43%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Pregunta 2" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '43%',
                    top: '60%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '50px',
                    backgroundColor: '#FFFF'
                }}
            ></input>

            <input type="text" value="Pregunta 2" readOnly
                style={{
                    textAlign: "center",
                    position: 'absolute',
                    left: '43%',
                    top: '70%',
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
                inicio
            </Button>

            <Boton
                nameClass="respueta1"
                text="Puntaje"
                id={5}
            />
            <Boton
                nameClass="respueta2"
                text="Puntaje"
                id={6}
            />

            <Boton
                nameClass="respueta3"
                text="Puntaje"
                id={7}
            />

        </>
    );
}
