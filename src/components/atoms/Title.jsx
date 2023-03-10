import styled from "styled-components";

//Nos permite usar html y css en el mismo bloque de codigo  //para utlizar styled
const Title = styled.h1`
    font-family: 'Hepta Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 5rem;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    @media screen and (max-width:767px){
        font-size: 1.8rem;
        line-height: 3rem;
    }
`; 


export default Title;