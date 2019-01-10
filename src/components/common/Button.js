import styled, { css } from 'styled-components';

const Button  = styled.button`
    background: white;
    bordeR: 1px solid black;
    padding: 10px;

    ${ /* interpolate a function that have aaccess to the props within the `` 
        `` - tag template literals - ES6 do the magic as this is actually a function call.
        This allows styled-components to undentify any interpolated props/functions within this function call. It's all under the hood & syledcomp gives us access to the props */
        props => props.primary && css `
            background: blue;
            color: white;
        `}
`;

/* Styled Comopnents generates a style sheet and attaches classNAmes to the DOM nodes, then injects thre style sheet at the end of the Head at runtime! */
export default Button;


