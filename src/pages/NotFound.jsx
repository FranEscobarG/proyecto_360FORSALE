import Title from "../components/atoms/Title";
import '../assets/styles/formRegister.css'
import styled from "styled-components";

function NotFound() {
    return ( 
        <StyledDiv>
            <Title>Error: 404. Página no encontrada</Title>
        </StyledDiv>
        
     );
}

const StyledDiv=styled.div`
    height: 100vh;
    width: 100%;
    background-color: #2c0a7e;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default NotFound;
