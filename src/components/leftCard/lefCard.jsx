import { useState } from 'react'
import check from '../../assets/icon-success.svg'
import { StyledList, StyledDiv } from './leftCardStyles'
import { ErrorMsg } from '../errorMsg/erroMsg'
import { useNavigate } from "react-router-dom"
import { validateEmail } from '../../services/validateEmail'
import { setEmailOnLocalStorage } from '../../services/setEmailOnLocalStorage'

function LeftCard() {

    const [email, setEmail] = useState('')
    const [erroMsg, setErroMsg] = useState('')
    const [invalidInput, setInValidInput] = useState(false)
    const navigate = useNavigate()

    const inputStyle = {
        backgroundColor: invalidInput ? '#f3ccc8' : '',
        borderColor: invalidInput ? '#ee7e76' : '',
    }

    const handleClick = () => {
        setEmailOnLocalStorage(email)
        if (!validateEmail(email)) {
            setErroMsg('Valid email required')
            setInValidInput(true)
            return
        }

        navigate('/congratulations')
        setErroMsg('')
        setInValidInput(false)
    }

    return (
        <StyledDiv>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:
            </p>
            <StyledList>
                <li>
                    <img src={check} />
                    <span>Product discovery and building what matters</span></li>
                <li>
                    <img src={check} />
                    <span>Measuring to ensure updates are a success</span></li>
                <li>
                    <img src={check} />
                    <span>And much more!</span></li>
            </StyledList>

            <div className='form'>
                <div className='form-header'>
                    <span className='form-title'>Email adress</span>
                    <ErrorMsg>{erroMsg}</ErrorMsg>
                </div>
                <input style={inputStyle} type="email" name="email" id="email" placeholder='email@company.com' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <button type='submit' onClick={() => { handleClick() }}>Subscribe to monthly newsletter</button>
            </div>
        </StyledDiv>

    )
}

export { LeftCard }