import React from 'react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {



  return (

    <>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
          </Routes>
      </BrowserRouter>
          
    </>

  )
}

export default App