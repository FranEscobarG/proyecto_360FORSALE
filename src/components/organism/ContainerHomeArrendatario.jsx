import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import Card from "../molecules/Card";
import Search from "../molecules/Search";
import MiInmueble2 from '../../assets/img/miInmueble2.png'
import '../../assets/styles/homeArrendador.css'


function ContainerHomeArrendatario() {
    const allCategories = ['VENTAS', 'RENTAS', 'REMATES'];

    return ( 
        <section>
            <div className="cover-home_arrendatario">
                <Title>COMPRAR TU INMUEBLE CON NOSOTROS AHORA ES MÁS FACÍL</Title>
                <Search homeSearch={true} categories={allCategories} />
            </div>

            <div className="container_catalogo">
                <Subtitle>CATALOGO DE INMUEBLES</Subtitle>
                <div className="flex_catalogo" >
                    <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" cardCatalogo={true} price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                    <Card img={MiInmueble2} subtitle="Rancho Marlene" ruta="#" cardCatalogo={true} price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                    <Card img={MiInmueble2} subtitle="Quinta Dos Arbolitos" ruta="#" cardCatalogo={true} price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />  
                    <Card img={MiInmueble2} subtitle="Quinta Dos Arbolitos" ruta="#" cardCatalogo={true} price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                </div>
            </div>
            <div className="container_catalogo">
                <Subtitle>INMUEBLES CERCA DE TI</Subtitle>
                <div className="flex_catalogo">
                    <Card img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" cardCatalogo={true} />
                    <Card img={MiInmueble2} subtitle="Rancho Marlene" ruta="#" cardCatalogo={true} />
                    <Card img={MiInmueble2} subtitle="Quinta Dos Arbolitos" ruta="#" cardCatalogo={true} />  
                    <Card img={MiInmueble2} subtitle="Quinta Dos Arbolitos" ruta="#" cardCatalogo={true} /> 
                    <Card img={MiInmueble2} subtitle="Quinta Dos Arbolitos" ruta="#" cardCatalogo={true} />
                </div>
            </div>
        </section>
     );
}

export default ContainerHomeArrendatario;