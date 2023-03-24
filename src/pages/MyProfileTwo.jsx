import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import ContainerPerfil from "../components/organism/ContainerPerfil";

function MyProfileTwo() {
    return ( 
        <>
            <Navbar navArrendatario={true} />
            <ContainerPerfil/>
            <Footer/>
        </>
     );
}

export default MyProfileTwo;