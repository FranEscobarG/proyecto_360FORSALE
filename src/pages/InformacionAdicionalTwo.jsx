import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import WrapperInfo from "../components/molecules/WrapperInfo";

function InformacionAdicionalTwo() {
    return ( 
        <>
            <Navbar navArrendatario={true} />
            <WrapperInfo/>
            <Footer/>
        </>
     );
}

export default InformacionAdicionalTwo;