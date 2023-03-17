import styled from "styled-components";
import Card from "../molecules/Card";
import MiInmueble1 from '../../assets/img/miInmueble1.png'
import MiInmueble2 from '../../assets/img/miInmueble2.png'
import MiInmueble3 from '../../assets/img/miInmueble3.png'

function FlexCatalog() {
    return ( 
        <>
            <StyledFlexCatalog>
                <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" />
                <Card img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#" />
                <Card img={MiInmueble3} subtitle="Casa con alberca" ruta="#" />

                <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" />
                <Card img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#" />
                <Card img={MiInmueble3} subtitle="Casa con alberca" ruta="#" />
            </StyledFlexCatalog>
        </>
        
        
     );
}

const StyledFlexCatalog = styled.div`
    max-width: 90%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 5rem 0;
    flex-wrap: wrap;
    grid-gap: 80px;
    background-color: #aed5f7;
`

export default FlexCatalog;