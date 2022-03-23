import React from 'react'
import AuthBox from '../../shared/components/AuthBox';
import {Typography} from '@mui/material'
export default function RegisterPage() {
  return (
   <AuthBox>
     {/* Everything in between this auth box will be the props.children there */}
     <Typography variant='5' sx={{
       color:'white'
     }}>
       Create an Account
     </Typography>
   </AuthBox>
  )
}
