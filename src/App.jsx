import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Skills from './page/Skills';
import { AboutMe } from './page/AboutMe';
import UIUX from './page/Design';
import ArrivalEase from './page/ArrivalEase';
import Airwise from './page/Airwise';
import Sapt from './page/Sapt';
import Home from './page/Home';
import '../fonts.css'

function App() {

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/skills' element={<Skills/>} exact/>
            <Route path='/design' element={<UIUX/>} exact/>
            <Route path='/arrivalease' element={<ArrivalEase/>} exact/>
            <Route path='/airwise' element={<Airwise/>} exact/>
            <Route path='/sapt' element={<Sapt/>} exact/>
            <Route path='/about' element={<AboutMe/>} exact/>
          </Routes>
        </Router>
    </>
  )
}

export default App
