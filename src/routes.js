import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import ConsultasPage from "./pages/ConsultasPage"
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'

function RoutesApp() {

    return(
        <BrowserRouter>
            <Routes>
                <Route Component={ HomePage } path="/"/>
                <Route Component={ ConsultasPage } path="/ConsultasPage" />
                <Route Component={ LoginPage } path="/LoginPage"/>
                <Route Component={ HomePage } path="/HomePage"/>
                <Route Component={ SobrePage } path="/SobrePage"/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp