import { styled } from "styled-components";

const StyledDiv = styled('div')`
    background-color: hsl(0, 0%, 100%);
    padding: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 380px;

    img {
        width: 30px;
        margin-bottom: 10px;
    }

    h1 {
        margin-bottom: 10px;
        color:hsl(234, 29%, 20%);
        font-size: 38px;
    }

    p {
        max-width: 80%;
        margin-bottom: 10px;
        line-height: 22px;
    }

    span{
        color:hsl(234, 29%, 20%);
        font-weight: 700;
    }

    button{
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: hsl(234, 29%, 20%);
            color: hsl(0, 0%, 100%);
            font-weight: 700;
            cursor: pointer;
            transition: 0.3s;
            margin-bottom: 10px;

            &:hover {
                background-image: linear-gradient(to right,#e6392c 10%, #ee564b 50%, #f02f21 90%);
            }
    }
`

export { StyledDiv }