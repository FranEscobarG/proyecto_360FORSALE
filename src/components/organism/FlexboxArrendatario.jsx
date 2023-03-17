import styled from "styled-components";
import Card from "../molecules/Card";
import MiInmueble1 from '../../assets/img/miInmueble1.png'
import MiInmueble2 from '../../assets/img/miInmueble2.png'
import MiInmueble3 from '../../assets/img/miInmueble3.png'
import Subtitle from "../atoms/Subtitle";

function FlexboxArrendatario() {
    return (
        <>
            <Subtitle>Mis Inmuebles Adquiridos</Subtitle>
            <StyledFlexbox>
                <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" cardCatalogo={true} />
                <Card img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#" cardCatalogo={true} />
                <Card img={MiInmueble3} subtitle="Casa con alberca" ruta="#" cardCatalogo={true} />

                <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" cardCatalogo={true} />
                <Card img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#" cardCatalogo={true} />
                <Card img={MiInmueble3} subtitle="Casa con alberca" ruta="#" cardCatalogo={true} />
            </StyledFlexbox>
        </>


    );
}

const StyledFlexbox = styled.div`
    min-height: 80vh;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 5rem 0;
    flex-wrap: wrap;
    grid-gap: 80px;
`

export default FlexboxArrendatario;