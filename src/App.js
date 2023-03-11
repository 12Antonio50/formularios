import "./css/style.css";

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './componentes/Login';


export default function App() {


        return(
          <>
            <div className='App'>  
          <Routes>
          <Route path="/" element={<Login/>}/>
          </Routes>
          </div>    
        </>
  );
  }
