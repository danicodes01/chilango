import React, { useState } from 'react'
import styles from './Signup.module.css'
import { signup } from '../../auth'

const Signup = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [open, setOpen] = useState(false)
  const [err, setErr] = useState('')

  const addUserHandler = e => {
    e.preventDefault()
    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword
    }

    signup(user).then(data => {
      if (data.error) {
        setErr(data.error)
      } else {
        setErr('')
        setEnteredName('')
        setEnteredEmail('')
        setEnteredPassword('')
        setOpen(true)
      }
    })
  }

  const usernameChangeHandler = e => {
    setErr('')
    setOpen(false)
    setEnteredName(e.target.value)
  }
  const userEmailChangeHandler = e => {
    setErr('')
    setOpen(false)
    setEnteredEmail(e.target.value)
  }
  const userPasswordChangeHandler = e => {
    setErr('')
    setOpen(false)
    setEnteredPassword(e.target.value)
  }
  return (
    <div className={styles.input}>
      {err && <div className={styles.err}>{err}</div>}
      {open && (
        <div className={styles.open}>
          Oh nice! you're all signed up!❤️ Feel free to Sign in whenever 😻
        </div>
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>name</label>
        <input
          onChange={usernameChangeHandler}
          id='name'
          type='text'
          value={enteredName}
        />
        <label htmlFor='email'>email</label>
        <input
          onChange={userEmailChangeHandler}
          id='email'
          type='email'
          value={enteredEmail}
        />
        <label htmlFor='password'>password</label>
        <input
          autoComplete="off"
          onChange={userPasswordChangeHandler}
          className={styles.pword}
          id='password'
          type='text'
          value={enteredPassword}
        />
        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default Signup
