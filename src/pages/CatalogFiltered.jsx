import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import FlexCatalog from "../components/organism/FlexCatalog";

function CatalogFiltered() {
    

    return ( 
        <>
            <Navbar navArrendatario={true} />
            <FlexCatalog/>
            <Footer/>
        </>
     );
}

export default CatalogFiltered;