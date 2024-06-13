export const checkValidData=(email,password)=>{
const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
const isPasswordValidation=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
if(!isEmailValid) return "Email Id is not valid"
if(!isPasswordValidation) return "Password is Not valid"
return null
}