import { useState } from "react";
import styled from "styled-components";
import CardTwo from "../molecules/CardTwo";
import MiInmueble1 from '../../assets/img/miInmueble1.png'
import MiInmueble2 from '../../assets/img/miInmueble2.png'
import MiInmueble3 from '../../assets/img/miInmueble3.png'
import Search from "../molecules/Search";

function FlexCatalog() {
    const data = [
        {
            id: 1,
            category: 'VENTAS',
            image: '/src/assets/img/miInmueble2.png',
            title: 'Rancho San Agustin',
            price: '$3,900,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        },
        {
            id: 2,
            category: 'RENTAS',
            image: '/src/assets/img/miInmueble1.png',
            title: 'Departamento en Real del Bosque',
            price: '$9,900,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        },
        {
            id: 3,
            category: 'VENTAS',
            image: '/src/assets/img/miInmueble3.png',
            title: 'Casa con alberca',
            price: '$7,200,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        },
        {
            id: 4,
            category: 'REMATES',
            image: '/src/assets/img/miInmueble1.png',
            title: 'Departamento en Real del Bosque',
            price: '$7,500,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        },
        {
            id: 5,
            category: 'RENTAS',
            image: '/src/assets/img/miInmueble3.png',
            title: 'Casa con alberca',
            price: '$7,100,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        },
        {
            id: 6,
            category: 'VENTAS',
            image: '/src/assets/img/miInmueble2.png',
            title: 'Rancho San Agustin',
            price: '$8,000,000',
            description: 'Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero.'
        }
    ];
    
    const allCategories = ['CATALOGO', 'VENTAS', 'RENTAS', 'REMATES'];

    const [categories, setCategories] = useState(allCategories);
    const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
        if(category === 'CATALOGO'){
            setArticles(data);
            return;
        }

        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData);
    }

    return ( 
        <>
            <Search homeSearch={false} categories={categories} filterCategory={filterCategory} />
            <StyledFlexCatalog>
                {
                    articles.map(article => (
                        <CardTwo key={article.id} img={article.image} subtitle={article.title} ruta="#" price={article.price} info={article.description} />
                    ))
                }
                
                {/* <CardTwo img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#"price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                <CardTwo img={MiInmueble3} subtitle="Casa con alberca" ruta="#" price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />

                <CardTwo img={MiInmueble2} subtitle="Rancho San Agustin" ruta="#" price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                <CardTwo img={MiInmueble1} subtitle="Departamento en Real del Bosque" ruta="#" price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} />
                <CardTwo img={MiInmueble3} subtitle="Casa con alberca" ruta="#" price={"$7,200,000"} info={"Cuenta con 3 habitaciones, 1 baño reformado, cocina equipada y un salón-comedor con acceso a una terraza con vistas panorámicas. Dispone de garaje y trastero."} /> */}
            </StyledFlexCatalog>
        </>
        
        
     );
}

const StyledFlexCatalog = styled.div`
    max-width: 90%;
    min-height: 80vh;
    margin-top: 2%;
    padding: 2rem 0 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    grid-gap: 80px;
`

export default FlexCatalog;