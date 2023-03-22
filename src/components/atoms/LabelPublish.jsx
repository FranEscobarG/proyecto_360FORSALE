import styled from 'styled-components';

const StyledLabelP = styled.label`
    font-family: 'Harmattan';
    font-size: 1.4rem;
    color: #000000;
    margin-bottom: -6px;
    padding: 2%;
`;


function LabelPublish( {msn} ) {
    return ( 
        <StyledLabelP>{msn}</StyledLabelP>
     );
}

export default LabelPublish;