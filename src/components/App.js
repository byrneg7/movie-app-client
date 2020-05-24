import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from "../routes/router";
import Modals from "./modals/Modals";

function App() {
  return (
    <>
      <Router/>
      <ToastContainer position="top-right" closeOnClick autoClose={5000}/>
      <Modals/>
    </>
  );
}

export default App;
