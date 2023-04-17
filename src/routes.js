import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import Header from "./components/Header"
import ConsultasPage from "./pages/ConsultasPage"

function RoutesApp() {

    return(
        <BrowserRouter>
            <Routes>
                <Route Component={ LoginPage } path="/LoginPage" />
                <Route Component={ ConsultasPage } path="/ConsultasPage" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp