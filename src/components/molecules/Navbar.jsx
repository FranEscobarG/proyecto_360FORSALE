import { useRef } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Logo from '../../assets/img/logoSinFondo.png'
import BurguerButton from "../atoms/BurguerButton";

function Navbar({ navArrendatario }) {
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false); // Para guardar el estado y cambios del boton burguer
    const [clickedOpc, setClickedOpc] = useState(false); 

    const redireccionarHome = (e)=> {
        e.preventDefault();
        navigate("/homeArrendador");
    }

    const handlerClick = () => {
        //Cambia verdadero a falso y viceversa
        setClicked(!clicked);
    }

    // const handlerClickOpc = () => {
    //     //Cambia verdadero a falso y viceversa
    //     setClickedOpc(!clickedOpc);
    // }

    return ( 
        <>
            <StyledNavbar>
                <img src={Logo} alt="Logo de la empresa" onClick={redireccionarHome} />
                {/* SI cliked es TRUE --> active, si es FALSE no agrega la clase */}
                <div className={`links ${clicked ? 'active' : ''}`} >
                    {/* <Link onClick={handlerClickOpc} className={`link ${clickedOpc ? 'activeOpc' : ''}`} to="#">Publicar Inmuebles</Link> */}
                    {/* <div className={`${navArrendatario ? 'innactive' : ''}`}>
                    </div> */}
                    {/* <Link className='link' to="#">{navArrendatario ? '' : 'Publicar Inmueble'}</Link> */}
                    <Link className={`link ${navArrendatario ? 'innactive' : ''}`} to="#">Publicar Inmueble</Link>
                    <Link className='link' to="/mispublicacionesArrendador" >Mis Inmuebles</Link>
                    <Link className='link' to="/masinfoarrendador">Más información</Link>
                    <Link className='link' to="#" href="#">Mi perfil</Link>
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
    width: 100%;
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
        cursor: pointer;
    }
    .link{
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
        .link{
            /* #0080FF */
            color: white;
            font-size: 2rem;
            display: block;
        }
        /* .link.activeOpc{
            color: #0080FF;
            background: red;
        } */

        @media(min-width: 1055px) { 
            position: initial;
            margin: 0;
            .link{
                font-size: 1rem;
                color: black;
                display: inline;
            }
            .link.activeOpc{
                color: #0080FF;
                padding: 25px 10px;
                border-bottom: 5px solid #2E97FF;
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
        z-index: 20;
        .link{
            color: white;
            margin-bottom: 1.5rem;
            margin-right: 0;
            margin-left: 0;
        }
        button{
            width: 50%;
            background-color: white;
            color: #0080FF;
        }
    }

    .btn_burguer{
        @media(min-width: 1055px) {
            display: none;
        }
    }
    .link.innactive{
        display: none;
    }
`;


const StyledBgDiv = styled.div`
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    background: #0080FF;
    z-index: 11;
    transition: all .6s ease;
    .btn_burguer{
        @media(min-width: 1055px) {
            display: none;
        }
    }
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 0 70% 0;
    }
`

export default Navbar;