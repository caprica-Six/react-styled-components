import { Button } from "reactstrap";
import styled from "styled-components";

// can also pass in the Button component from ReactStrap + some dirty css for demo
const PrimaryButton = styled(Button).attrs({
    color: 'info'
})`
    &:hover {
        color: black !important;
    }
`


export default PrimaryButton;

