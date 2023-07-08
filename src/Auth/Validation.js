function validation(detail){
    let error={}
    const email_pattern=/^[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(detail.email===""){
        error.email= 'Name should not be empty'

    }
    if(!email_pattern.test(detail.email)){
        error.email='Email Didnt match'
    }
    if(detail.password===""){
        error.password="Password should not be empty"
    }
    if(!password_pattern.test(detail.password)){
        error.password="Password didin't match"
    }
    return error
}

export default validation