const setEmailOnLocalStorage = (email)=>{
    localStorage.setItem('email', JSON.stringify(email))
}

export { setEmailOnLocalStorage }