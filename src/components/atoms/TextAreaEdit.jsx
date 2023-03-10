import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    width: 95%;
    height: 100%;
    padding: .5rem;
    font-family: 'Harmattan';
    font-size: 1.4rem;
    background: transparent;
    border-radius: 10px;
    /* border: 1px solid rgba(92, 174, 255, 1); */
    border: none;
    outline: none; 
    resize: none;
    margin-bottom: 1rem;
`;


function TextAreaEdit( {value} ) {
    return ( 
        <StyledTextArea>{value}</StyledTextArea>
    );
}

export default TextAreaEdit;