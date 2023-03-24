import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import FormPay from "../components/organism/FormPay";

function Pay() {
    return ( 
        <>
            <Navbar navArrendatario={true} />   
            <FormPay></FormPay> 
            <Footer></Footer>
        </>
    );
}

export default Pay;