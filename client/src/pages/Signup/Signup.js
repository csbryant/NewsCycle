import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { useUserContext } from '../../context/userContext'

const Signup = (props) => {
  console.log(props)
  const username = useRef()
  const password = useRef()
  const [user, dispatch] = useUserContext()

  const trySignup = () => {
    let signupObj = {
      email: username.current.value,
      password: password.current.value,
    }

    fetch('/auth/register_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupObj),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'loggedInUser',
          payload: data,
        })

        props.history.push('/home')
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div>
      <input ref={username} type='text' placeholder='email' />
      <input ref={password} type='password' placeholder='password' />
      <button onClick={trySignup}>Sign Up</button>
      <p>If you are an existing user, please <a href="/login">Log In!</a></p>
    </div>
  )
}
export default Signup
