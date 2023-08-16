import { styled } from "styled-components";

const StyledMainCards = styled('div')`
    background-color: hsl(0, 0%, 100%);
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 25px;
    gap: 15px;

    @media (max-width: 375px) {
        flex-direction: column-reverse;
        padding: 0px;
        margin: 0px;
        gap: 5px;
        border-radius: 0;
    }

    @media (max-width: 730px) {
        flex-direction: column-reverse;
    }

`
export { StyledMainCards }