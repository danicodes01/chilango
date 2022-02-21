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

// useEffect(() => {
//     const userId = props.match.params.userId
//     fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${isAuthenticated().token}`,
//       },
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         if (data.error) {
//           setGotoSignIn(true)
//         } else {
//           setUser(data)
//         }
//       })
//   }, [])

// {
/* <div>
<div className={styles.userProfle}>
  <h2>Profile</h2>
  <p>Hello {isAuthenticated().user.name}</p>
  <p>email</p>
  <p>{`joined: ${new Date(user.created).toDateString()}`}</p>
</div>
<div>
  {isAuthenticated().user && isAuthenticated().user._id === user._id && (
    <div>
      <Link to={`/user/edit/${user._id}`}>Edit Profile</Link>
  <DeleteUser />
</div>
  )}
</div>
</div> */
// }

// const Button = styled.div`
//   color: ${(props) => (props.theme.mode === "dark" ? "black" : "black")};
//   padding: 12px 15px;
//   background-color: ${(props) =>
//     props.theme.mode === "dark" ? "aliceblue" : "aliceblue"};
//   opacity: 0.75;
//   font-size: 12px;
//   border-radius: 3px;
//   border-width: 0.5px;
//   border-color: black;
//   transition: ease 0.01s all;
//   text-transform: uppercase;
//   box-shadow: 0px 2px 2px black;
//   text-align: center;

//   transition: ease background-color 250ms;
//   :active {
//     opacity: 0.5;
//     color: black;
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "aliceblue" : "aliceblue"};
//   }
// `
