// import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import For from './page/404';
// import Tic from './page/tic-tac-toe/app';
import Textana from './page/Text Analyzer';


function App() {

    return (
            <Router>
                <Routes>
                    <Route path='/' element={<Mainpage />} />
                    <Route path='/404-page' element={<For />} />
                </Routes>
            </Router>
    )
}

export default App
