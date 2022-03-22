import React,{useState,useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageFooter from './LoginPageFooter';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import { validateLoginForm} from '../../shared/utils/validators';
/**
 * TODO
 * 
 */
export default function LoginPage() {
  const [mail,setMail]=useState("");
  const [password,setPassword] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({mail,password}));
  },[mail,password,setIsFormValid])

  const handleLogin=()=>{
    // just for checking the input is displaying 
    console.log(mail)
    console.log(password)
    console.log("log in") 
  }

  return (
   <AuthBox>
     <LoginPageHeader/>
     <LoginPageInputs mail={mail}
     setMail={setMail}
     password={password}
     setPassword={setPassword}/>
     <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
   </AuthBox>
  )
}
