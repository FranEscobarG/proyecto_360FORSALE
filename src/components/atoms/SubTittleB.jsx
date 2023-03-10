import styled from "styled-components";

const StyledSubTittle = styled.h2`
    margin-left: 2rem;
    font-weight: bold;
    font-family: 'Harmattan';
    font-style: normal;
    color: #000000;
    background: transparent;
    text-align: left;
    width: 100%;
`;

function SubTittleB( {msn} ) {
    return ( 
        <StyledSubTittle>{msn}</StyledSubTittle>
    );
}

export default SubTittleB;
