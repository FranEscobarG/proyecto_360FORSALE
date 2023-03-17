import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardTwo({ img, subtitle, ruta, cardCatalogo, price, info }) {
    return ( 
        <StyledCardTwo>
            <figure className='cursor_logo'>
                <img src={img} alt="Foto del inmueble" />
            </figure>
            <div className="contenido">
                <h3>{subtitle}</h3>
                
                <div className={`${cardCatalogo ? 'innactive' : ''}`}>
                    <Link className={`btn_editar`} to={ruta}>Editar publicación</Link>
                </div>
                <div className={`description ${cardCatalogo ? 'active_description' : ''}`} >
                    <span className='price'>{price}</span>
                    <p className='text_description'>{info}</p>
                </div>
                
            </div>
        </StyledCardTwo>
     );
}

const StyledCardTwo = styled.div`
    /* height: 400px; */
    width: 25%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #ebf5ff;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
    transition: all .4s ease;
    &:hover{
        box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%);
    }
    img{
        width: 100%;
        height: 225px;
        cursor: pointer;
    }
    .contenido{
        padding: 15px;
    }
    .contenido h3{
        font-family: 'Hepta Slab';
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .4rem;
    }
    .contenido .btn_editar{
        width: 92%;
        font-family: 'Harmattan';
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 700;
        text-align: center;
        margin: 1.5rem 0 1rem;
        display: inline-block;
        padding: 9px;
        color:#5CAEFF;
        border: 2px solid #5CAEFF;
        border-radius: 20px;
        transition: all .4s ease;
    }
    .contenido .btn_editar:hover{
        background: #5CAEFF;
        color: white;
    }
    .innactive{
        display: none;
    }
    .description{
        display: none;
    }
    .active_description{
        display: block;
    }
    .description .price{
        font-family: 'Harmattan';
        font-style: normal;
        font-weight: 550;
        font-size: 1.5rem;
        color: #0080FF;
    }
    .description  .text_description{
        font-family: 'Harmattan';
        font-size: 1.4rem;
        line-height: 1.2rem;
        text-align: justify;
    }

    @media screen and (max-width:1370px){
        width: 35%;
    }

    @media screen and (max-width:920px){
        width: 60%;
    }

    @media screen and (max-width:767px){
        width: 95%;
        .contenido h3{
            font-size: 1rem;
            margin-bottom: .3rem;
        }
        .description .price{
            font-size: 1.3rem;
        }
        .description  .text_description{
            font-family: 'Harmattan';
            font-size: 1.2rem;
            line-height: 1.2rem;
            text-align: justify;
        }
    }
`

export default CardTwo;