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
                <Route Component={PaginaPadrao} path="/">
                    <Route Component={HomePage} index />
                    <Route Component={ConsultasPage} path="/ConsultasPage" />
                    <Route Component={LoginPage} path="/LoginPage" />
                    <Route Component={HomePage} path="/HomePage" />
                    <Route Component={SobrePage} path="/SobrePage" />
                    <Route Component={NaoEncontrada} path="*" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}