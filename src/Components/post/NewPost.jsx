import React, {useEffect, useState} from 'react'
import { isAuthenticated } from '../../auth'
import { create } from './apiPost
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams } from 'react-router-dom'
import { title } from 'npm/lib/npm'

const NewPost = () => {
const [ titlePost, setTitlePost ] = useState('')
const [ bodyPost, setBodyPost ] = useState('')
const [ errPost, setErrorPost ] = useState('')
const [ userPost, setUserPost ] = useState({})

useEffect(() => {
  this.postData = new FormData()
  setUserPost(isAuthenticated.user)
})

isValid = () => {
  if(title.length === 0 || bodyPost.length === 0) {
    setErrorPost('🤖beep...All fields are required')
    return false 
  }
  // if(!/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //   setErrorPost('🤖beep...A valid Email is required')
  // }
}

const handleChange = name => e => {
  setErrorPost('');
  setPostData(name, value)
}

  return (
    <div> <form onSubmit={addUserHandler}>
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
  </form></div>
  )
}

export default NewPost