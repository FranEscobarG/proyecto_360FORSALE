import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: 'Harmattan';
    font-size: 1.4rem;
    color: #000000;
    width: 100%;
`;


function Label( {msn} ) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
     );
}

export default Label;