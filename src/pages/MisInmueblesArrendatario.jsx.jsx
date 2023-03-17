import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import FlexboxArrendatario from "../components/organism/FlexboxArrendatario";

function MisInmueblesArrendatario() {
    return ( 
        <>
            <Navbar navArrendatario={true} />
            <FlexboxArrendatario/>
            <Footer/>
        </>
     );
}

export default MisInmueblesArrendatario;