import React, { useState, useEffect } from "react"
import { read } from "../User/apiUser"
import { Redirect, withRouter } from "react-router-dom"
import Idioma from "../User/profile/Idioma"
import Darkmode from "../User/profile/Darkmode"
import { isAuthenticated } from "../../auth"
import { useParams } from "react-router-dom"
import SignOutUser from "../User/profile/SignOutUser"
import GoToHome from "../User/profile/GoToHome"



const Profile = ({
  getLang,
  setEnglishPrimary,
  useTranslation,
  theme,
  setTheme,
  t,
  englishPrimary,
  setSpanishPrimary,
  history,
}) => {
  const [user, setUser] = useState("")
  const [goToSignIn, setGotoSignIn] = useState(false)
  const { userId } = useParams()


  const init = (userId) => {
    const token = isAuthenticated().token
    read(userId, token).then((data) => {
      if (data.error) {
        setGotoSignIn(true)
      } else {
        setUser(data)
      }
    })
  }
  useEffect(() => {
    init(userId)
  }, [userId])

  if (goToSignIn) {
    return <Redirect to="/signin" />
  }
console.log(user)
  return (
    <div>
      <Idioma
        getLang={getLang}
        t={t}
        englishPrimary={englishPrimary}
        setSpanishPrimary={setSpanishPrimary}
        setEnglishPrimary={setEnglishPrimary}
        useTranslation={useTranslation}
      />
      <Darkmode theme={theme} setTheme={setTheme} t={t} />
      <SignOutUser t={t} history={history}/>
      <GoToHome t={t} />   
    </div>
  )
}

export default withRouter(Profile)

