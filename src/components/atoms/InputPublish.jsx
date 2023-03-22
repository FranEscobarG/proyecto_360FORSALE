import styled from 'styled-components';

const StyledInputP = styled.input`
    padding: 15px 10px;
    font-size: 1rem;
    background: #F1F8FF;
    color: #2e97ff;
    border: 1px solid #2E97FF;
    border-radius: 5px;
`;

function InputPublish({type, placeholder}) {
    return ( 
        <StyledInputP type={type} placeholder={placeholder}/>
     );
}

export default InputPublish;