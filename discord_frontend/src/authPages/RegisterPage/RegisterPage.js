import React from 'react'
import AuthBox from '../../shared/components/AuthBox'
export default function RegisterPage() {
  return (
   <AuthBox>
     {/* Everything in between this auth box will be the props.children there */}
     Register Page
   </AuthBox>
  )
}
