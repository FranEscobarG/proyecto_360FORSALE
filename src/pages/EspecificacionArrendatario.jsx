import Footer from "../components/molecules/Footer";
import ContainerEspecificacionArrendatario from "../components/organism/ContainerEspecificacionArrendatario";
import Navbar from "../components/molecules/Navbar";


function EspecificacionArrendatario() {
    return ( 
        <>
            <Navbar navArrendatario={true} />
            <ContainerEspecificacionArrendatario/>
            <Footer/>
        </>
    );
}

export default EspecificacionArrendatario;