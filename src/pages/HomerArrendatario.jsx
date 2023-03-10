import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import ContainerHomeArrendatario from "../components/organism/ContainerHomeArrendatario";

function HomerArrendatario() {
    return ( 
        <>
            <Navbar navArrendatario={true} />
            <ContainerHomeArrendatario/>
            <Footer/>
        </>
     );
}

export default HomerArrendatario;