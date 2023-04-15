import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Home from './pages/Home'
import Consultas from './pages/Consultas'

import Header from "./components/Header"

function RoutesApp() {

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Consultas" element={<Consultas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp