import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/LoginPage'
import Consultas from './pages/ConsultasPage'

import Header from "./components/Header"

function RoutesApp() {

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Consultas" element={<Consultas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp