import { Navigate } from "react-router-dom"


const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;

    return re.test(email)
}

function PrivateRoutes({children}){
    
    const email = localStorage.getItem('email')

    return validateEmail(email) ? children : <Navigate to='/' />
}

export { PrivateRoutes }