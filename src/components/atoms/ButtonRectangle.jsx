import styled from "styled-components";

function ButtonRectangle({type, value, handlerClick}) {
    return ( 
        <StyledButtonRectangle type={type} onClick={handlerClick}>{value}</StyledButtonRectangle>
     );
}
const StyledButtonRectangle = styled.button`
    width: 30%;
    padding: 2px 10px 0 10px;
    margin-top: 10%;
    font-family: 'Harmattan';
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    font-variant: small-caps;
    background: #8AC5FF;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* border-radius: 10px; */
    border: none;
    cursor: pointer;
    border: 1px solid #2E97FF;
`;
export default ButtonRectangle;