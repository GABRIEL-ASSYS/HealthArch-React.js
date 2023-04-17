import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage'
import Header from "./components/Header"
import ConsultasPage from "./pages/ConsultasPage"

function RoutesApp() {

    return(
        <BrowserRouter>
            <Routes>
                <Route component={ LoginPage } path="/LoginPage" />
                <Route component={ ConsultasPage } path="/ConsultasPage" />
            </Routes>
            <LoginPage />
        </BrowserRouter>
    )
}

export default RoutesApp