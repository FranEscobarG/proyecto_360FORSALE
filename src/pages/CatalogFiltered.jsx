import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import ContainerHomeArrendatario from "../components/organism/ContainerHomeArrendatario";
import FlexCatalog from "../components/organism/FlexCatalog";

function CatalogFiltered() {
    

    return ( 
        <>
            <Navbar navArrendatario={true} />
            <FlexCatalog/>
            {/* <ContainerHomeArrendatario/> */}
            <Footer/>
        </>
     );
}

export default CatalogFiltered;