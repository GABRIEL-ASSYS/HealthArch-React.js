import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const PaginaPadrao = ({ children }) => {
  return (
    <main>
        <Header />
            <Outlet />
            {children}
        <Footer />
    </main>
  )
}

export default PaginaPadrao