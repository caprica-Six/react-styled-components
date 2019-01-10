import styled  from "styled-components";

// render an HTML element input with type password
const PasswordInput = styled.input.attrs({
    // set to funciton that returns the value
    type: props => props.showPassword? 'text' : 'password'
})`
    border-radius: 2px;
    outline: none;
    border: 1px solid black;
    &:focus {
        border-color: blue;
    }
    padding: 10px;
`;

export default PasswordInput;