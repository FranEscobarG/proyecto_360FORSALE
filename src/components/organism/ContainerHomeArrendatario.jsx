import ButtonFilter from "../atoms/ButtonFilter";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";
import Card from "../molecules/Card";

import MiInmueble2 from '../../assets/img/miInmueble2.png'


function ContainerHomeArrendatario() {
    return ( 
        <section>
            <div className="cover-home_arrendador">
                <Title>COMPRAR TU INMUEBLE CON NOSOTROS AHORA ES MÁS FACÍL</Title>
                <div className="container-homeSearch">
                    <div className="buttons">
                        <ButtonFilter type="button" value="Catalogo" handlerClick={"handlerClick"} active />
                        <ButtonFilter type="button" value="Ventas" handlerClick={"handlerClick"} active />
                        <ButtonFilter type="button" value="Rentas" handlerClick={"handlerClick"} active />
                        <ButtonFilter type="button" value="Remates" handlerClick={"handlerClick"} active />
                    </div>
                    <div className="search">
                        <input type="search" name="" id="" className="inputSearch" placeholder=" Ingresa especificaciones del inmueble"/>
                        <button className="btn_search">Buscar</button>
                    </div>
                </div>
            </div>

            <div className="container_catalogo">
                <Subtitle>CATALOGO DE INMUEBLES</Subtitle>
                <div className="flex_catalogo">
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