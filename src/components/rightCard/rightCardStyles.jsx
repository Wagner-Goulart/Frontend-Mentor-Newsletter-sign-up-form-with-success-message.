import { styled } from "styled-components";

const StyledImage = styled('img')`
    height: 450px;

    @media(max-width: 375px) {
        display: none;
    }

    @media (max-width: 730px) {
        display: none;
    }

`
const StyledDiv = styled('div')`
    @media(max-width:375px) {
        height: 284px;
        background: url('src/assets/illustration-sign-up-mobile.svg') no-repeat;
    }

    @media (max-width: 730px) {
        height: 284px;
        background: url('src/assets/illustration-sign-up-mobile.svg') no-repeat;
        background-size: cover;
        border-radius: 5px;
    }

`

export { StyledImage, StyledDiv }