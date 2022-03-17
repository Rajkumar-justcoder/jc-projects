// import { useState } from 'react'
import './App.css'
import Mainpage from './Mainpage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import For from './components/404/app';
import Team from './components/my team page/Team'


function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Mainpage />} />
                    <Route path='/404-page' element={<For />} />
                    <Route path='/my-team-page' element={<Team />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
