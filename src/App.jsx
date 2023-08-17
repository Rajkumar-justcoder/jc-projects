// import { useState } from 'react'
import './App.css'
import Mainpage from './components/Mainpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import For from './page/404';
import { Login } from './page/login';
// // import Tic from './page/tic-tac-toe/app';
// import Textana from './page/Text Analyzer';

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Mainpage />} />
                <Route path='/404-page' element={<For />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App
