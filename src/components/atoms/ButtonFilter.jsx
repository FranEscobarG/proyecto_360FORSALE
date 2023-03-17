import styled from "styled-components";

const StyledButtonFilter = styled.button`
    width: 20%;
    padding: .6rem 0 .4rem 0;
    /* margin-top: 10%; */
    font-family: 'Harmattan';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    background: #8AC5FF;
    color: black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    border: none;
    cursor: pointer;

    @media screen and (max-width:767px){
        width: 25%;
        padding: .5rem .4rem .3rem;
        font-size: 1.2rem;
    }

    @media screen and (max-width:1370px){
        width: 25%;
        font-size: 1.4rem;
    }
`;


function ButtonFilter({type, value, category, filterCategory, btnCatHome, funcion}) {
    return ( 
        <StyledButtonFilter type={type} key={category} onClick={btnCatHome ? funcion : () => filterCategory(category)}  >{value}</StyledButtonFilter>
     );
}

export default ButtonFilter;