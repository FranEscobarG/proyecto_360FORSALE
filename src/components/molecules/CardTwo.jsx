import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardTwo({ img, subtitle, ruta, price, info }) {
    return (
        <StyledCardTwo >
            <figure className='cursor_logo'>
                <img src={img} alt="Foto del inmueble" />
            </figure>
            <div className="contenido">
                <h3>{subtitle}</h3>
                <span className='price'>{price}</span>
                <p className='text_description'>{info}</p>
            </div>
        </StyledCardTwo>
    );
}

const StyledCardTwo = styled.div`
    display: flex;
    width: 45%;
    padding: 20px 10px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f0f7ff;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
    transition: all .4s ease;
    &:hover{
        box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%);
    }
    img{
        height: 225px;
        cursor: pointer;
    }
    .contenido{
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 2%;
    }
    .contenido h3{
        width: 100%;
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
    .price{
        font-family: 'Harmattan';
        font-style: normal;
        font-weight: 550;
        font-size: 1.5rem;
        color: #0080FF;
    }
    .text_description{
        font-family: 'Harmattan';
        font-size: 1.4rem;
        line-height: 1.3rem;
        text-align: justify;
    }

    /* DISEÑO SE ADAPTA PARA TABLET  max-1023 */
    @media screen and (min-width:768px) and (max-width:1374px){
        width: 70%;
        margin: auto;
    }

    /* DISEÑO SE ADAPTA PARA MOVIL */
    @media screen and (max-width:767px){
        width: 90%;
        margin: auto;
        flex-direction: column;
        padding: 20px;
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
            line-height: 1.3rem;
            text-align: justify;
        }
    }


`

export default CardTwo;