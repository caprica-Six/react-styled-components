import React from 'react';
import styled  from "styled-components";

// render an HTML element input with type password
const StyledPasswordInput = styled.input`
    border-radius: 2px;
    outline: none;
    border: 1px solid black;
    &:focus {
        border-color: blue;
    }
    padding: 10px;
`

const PasswordInput = () => {
    return <StyledPasswordInput type="password" />
}

export default PasswordInput;