import styled from 'styled-components';

const StyledInputP = styled.input`
    /* height: 40px; */
    padding: 15px 10px;
    font-size: 1rem;
    background: #F1F8FF;
    color: #2e97ff;
    border: 1px solid #2E97FF;
    border-radius: 8px;
    /* border: none; */
`;

function InputPublish({type, placeholder}) {
    return ( 
        <StyledInputP type={type} placeholder={placeholder}/>
     );
}

export default InputPublish;