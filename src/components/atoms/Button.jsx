import styled from "styled-components";

const StyledButton = styled.button`
    ${props => (props.pay) ? '' : 'height: 75px;' }
    
    width: 90%;
    padding: 6px 10px 4px 10px;
    margin-top: ${props => (props.pay) ? '10%' : '5%' };
    font-family: 'Harmattan';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    background: #2E97FF;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Button({type, value, handlerClick}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick} >{value}</StyledButton>
     );
}

export default Button;
