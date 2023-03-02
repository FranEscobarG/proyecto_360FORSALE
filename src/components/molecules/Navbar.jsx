import { useState } from "react";
import styled from "styled-components";
import Logo from '../../assets/img/logoSinFondo.png'
import BurguerButton from "../atoms/BurguerButton";

function Navbar() {

    const [clicked, setClicked] = useState(false); // Para guardar el estado y cambios del boton burguer

    const handlerClick = () => {
        //Cambia verdadero a falso y viceversa
        setClicked(!clicked);
    }

    return ( 
        <>
            <StyledNavbar>
                <img src={Logo} alt="Logo de la empresa" />
                {/* SI cliked es TRUE --> active, si es FALSE no agrega la clase */}
                <div className={`links ${clicked ? 'active' : ''}`} >
                    <a href="https://chat.openai.com/chat">Publicar Inmuebles</a>
                    <a href="https://www.figma.com/file/13v1ZIuaTuaSRHvLRvSkib/360%C2%B0FORSALE_221193_221202_221218_221215?node-id=133%3A92&t=2bMOJDDGdMRgvzNF-0">Mis Inmuebles</a>
                    <a href="https://www.google.com.mx/">Más información</a>
                    <a href="https://www.google.com.mx/">Mi perfil</a>
                    <button>Cerrar Sesión</button>
                </div>

                <div className="btn_burguer">
                    <BurguerButton clicked={clicked} handlerClick={handlerClick} />
                </div>
                <StyledBgDiv className={`initial ${clicked ? 'active' : '' }`} ></StyledBgDiv>
            </StyledNavbar>
        </>
     );
}

const StyledNavbar = styled.nav`
    height: 100px;
    padding: .4rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* border-bottom: 3px solid salmon; */
    img{
        height: 70%;
    }
    a{
        color: black;
        text-decoration: none;
        margin-right: 4rem;
    }
    button{
        padding: 1rem 2rem;
        margin: 0 .2rem 0 1.5rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        border-radius: 15px;
        border: none;
        background-color: #2E97FF;
    }

    .links{
        position: absolute;
        top: -800px;
        left: -2000px;
        right: 0;
        margin: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            /* #0080FF */
            color: white;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 1055px) {
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: black;
                display: inline;
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: white;
            margin-bottom: 1.5rem;
            margin-right: 0;
            margin-left: 0;
        }
        button{
            width: 60%;
            background-color: white;
            color: #0080FF;
        }
    }

    .btn_burguer{
        @media(min-width: 1055px) {
            display: none;
        }
    }
`;


const StyledBgDiv = styled.div`
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    background: #0080FF;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 70% 0;
    }
`

export default Navbar;