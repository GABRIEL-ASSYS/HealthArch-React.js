import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from 'pages/LoginPage'
import ConsultasPage from "pages/ConsultasPage"
import HomePage from 'pages/HomePage'
import SobrePage from 'pages/SobrePage'
import NaoEncontrada from "pages/NaoEncontrada"
import ScrollToTop from "ScrollToTop"
import PaginaPadrao from "pages/PaginaPadrao"

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="ConsultasPage" element={<ConsultasPage/>}/>
                    <Route path="LoginPage" element={<LoginPage/>}/>
                    <Route path="HomePage" element={<HomePage/>}/>
                    <Route path="SobrePage" element={<SobrePage/>}/>
                    <Route path="*" element={<NaoEncontrada/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}