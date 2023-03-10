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
`;


function ButtonFilter({type, value, handlerClick}) {
    return ( 
        <StyledButtonFilter type={type} onClick={handlerClick} >{value}</StyledButtonFilter>
     );
}

export default ButtonFilter;