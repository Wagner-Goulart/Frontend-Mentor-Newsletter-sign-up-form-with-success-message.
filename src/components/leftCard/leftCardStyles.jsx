import { styled } from "styled-components";

const StyledList = styled('ul')`
    li {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 10px 0px;

        @media (max-width: 375px) {
            font-size: 12px;
            gap: 10px;
        }
    }
    img {
    width: 20px;
   }
`

const StyledDiv = styled('div')`
    padding: 0px 10px;
    text-align: justify;
    margin: 30px 0px;
    color: hsl(235, 18%, 26%);
    
    @media (max-width: 375px){
        margin: 10px 0px;
        padding:0px 20px;
        font-weight: 700;
    }

    @media (max-width: 730px) {
        text-align: center;
    }

    h1 {
        letter-spacing: 2px;
        font-size: 54px;
        margin: 10px 0px;
        color: hsl(234, 29%, 20%);
        font-weight: 700;

        @media (max-width: 375px) {
            font-size: 32px;
            letter-spacing: 0;
        }
    }

    p {
        max-width: 400px;
        font-size: 16px;
        margin: 20px 0px;
        

        @media (max-width: 375px){
            max-width: 350px;
            text-align: left;
            font-size: 12px;
        }
    }
    
    .form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;

        span {
            color: hsl(234, 29%, 20%);
            font-weight: 700;
            font-size: 14px;
        }

        input{
            padding: 12px;
            border-radius: 5px;
            border: 1px solid hsl(231, 7%, 60%);

            &:focus {
                border: 1px solid hsl(235, 18%, 26%);
                outline: none;
            } 
        }

        button {
            padding: 15px;
            border-radius: 5px;
            border: none;
            background-color: hsl(234, 29%, 20%);
            color: hsl(0, 0%, 100%);
            font-weight: 700;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-image: linear-gradient(to right,#e6392c 10%, #ee564b 50%, #f02f21 90%);
            }
        }

        .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* width: 90%; */
            
            .form-title {
                font-size: 12px;
            }

        }
    }
`

export { StyledList, StyledDiv }
