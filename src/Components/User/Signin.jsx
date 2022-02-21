import React, { useState } from "react"
import styles from "./Signin.module.css"
import { Redirect } from "react-router-dom"
import { signin, authenticate } from "../../auth"

const Signin = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("") 
  const [enteredPassword, setEnteredPassword] = useState("")
  const [err, setErr] = useState("")
  const [open, setOpen] = useState(false)
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Redirect to="/" />
  }
  const addUserHandler = (e) => {
    e.preventDefault()
    const user = {
      email: enteredEmail,
      password: enteredPassword,
    }
    signin(user).then((data) => {
      if (data.error) {
        setErr(data.error)
      } else {
        setOpen(true)
        authenticate(data, () => setRedirect(true))
      }
    })
  }

  const userEmailChangeHandler = (e) => {
    setErr("")
    setOpen(false)
    setEnteredEmail(e.target.value)
  }
  const userPasswordChangeHandler = (e) => {
    setErr("")
    setOpen(false)
    setEnteredPassword(e.target.value)
  }
  return (
    <div className={styles.input}>
      {err && <div className={styles.err}>{err}</div>}
      {open && (
        <div className={styles.open}>
          Oh nice! you're all signed up!❤️ Feel free to login whenever 😻
        </div>
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="email">email</label>
        <input
          onChange={userEmailChangeHandler}
          id="email"
          type="email"
          value={enteredEmail}
        />
        <label htmlFor="password">password</label>
        <input
          autoComplete="off"
          className={styles.pword}
          onChange={userPasswordChangeHandler}
          id="password"
          type="text"
          value={enteredPassword}
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  )
}

export default Signin

// const Button = styled.button`
//   color: ${props => (props.theme.mode === 'dark' ? 'black' : 'black')};
//   padding: 12px 15px;
//   background-color: ${props =>
//     props.theme.mode === 'dark' ? 'gray' : 'gray'};
//   opacity: 0.75;
//   width: 100%;
//   font-size: 15px;
//   border-radius: 3px;
//   border-width: 0.5px;
//   border-color: black;
//   margin-top: 15px;
//   transition: ease 0.01s all;
//   text-transform: uppercase;
//   box-shadow: 0px 2px 2px black;
//   text-align: center;
//   transition: ease background-color 250ms;
//   :active {
//     opacity: 0.3;
//     color: black;
//     background-color: ${props =>
//       props.theme.mode === 'dark' ? 'gray' : 'gray'};
//   }
// `
