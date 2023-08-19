import { motion } from 'framer-motion'
import check from '../../assets/icon-success.svg'
import { StyledDiv } from './validationMsgStyles'
import { useNavigate } from "react-router-dom"

function ValidationMsg() {
    const navigate = useNavigate()

    const email = JSON.parse(localStorage.getItem('email'))

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
        >
            <StyledDiv>
                <img src={check} alt="check-icon" />
                <h1>Thanks for subscribing!</h1>
                <p> A confirmation email has been sent to <span>{email} </span>
                    Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={() => navigate('/')}>Dismiss message</button>
            </StyledDiv>
        </motion.div>
    )
}

export { ValidationMsg }