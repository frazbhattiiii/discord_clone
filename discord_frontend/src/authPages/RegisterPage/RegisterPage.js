import React ,{useState,useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import {Typography} from '@mui/material'
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage=({register})=> {
  const navigate = useNavigate();

  const [mail,setMail]=useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateRegisterForm({mail,
      username,password}));
  },[mail,password,setIsFormValid])
  
  const handleRegister=()=>{
  const userDetails={
    mail,
    password,
    username

  }
  register(userDetails,navigate)
  
  }
  return (
   <AuthBox>
     <Typography 
     variant='h5' 
     sx={{
       color:'white'
     }}>
       Create an Account
     </Typography>
     <RegisterPageInputs
     mail={mail}
     setMail={setMail}
     username={username}
     setUsername ={setUsername}
     password={password}
     setPassword={setPassword}
     />
     
     <RegisterPageFooter isFormValid={isFormValid} handleRegister={handleRegister}/>
   </AuthBox>
  )
}
const mapActionsToProps =(dispatch)=>{
  return{ 
    ...getActions(dispatch),

  }
}
export default connect(null,mapActionsToProps)(RegisterPage);
