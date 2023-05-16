import Footer from "components/Footer";
import Header from "components/Header";

const PaginaPadrao = ({ children }) => {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default PaginaPadrao