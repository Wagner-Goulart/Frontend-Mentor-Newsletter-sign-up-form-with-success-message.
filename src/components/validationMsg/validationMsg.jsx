import check from '../../assets/icon-success.svg'
import { StyledDiv } from './validationMsgStyles'
import { useNavigate } from "react-router-dom"

function ValidationMsg() {
    const navigate = useNavigate()

    const email = JSON.parse(localStorage.getItem('email'))

    return (
        <StyledDiv>
            <img src={check} alt="check-icon" />
            <h1>Thanks for subscribing!</h1>
            <p> A confirmation email has been sent to <span>{email} </span>
                Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={()=> navigate('/')}>Dismiss message</button>
        </StyledDiv>
    )
}

export { ValidationMsg }