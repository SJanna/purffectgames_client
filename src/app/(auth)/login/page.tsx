import React from 'react'
import LoginForm from '@/Components/Login/LoginForm'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Purffect Games - Login',
}
export default function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}