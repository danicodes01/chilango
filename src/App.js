import React, { useState, useEffect } from 'react'
import GlobalStyle from './Components/UI/globalStyles'
import { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'
import styles from './App.module.css'
import Header from './Components/main/Header'
import Home from './Components/main/Home'
import Signup from './Components/User/Signup'
import Signin from './Components/User/Signin'
import Profile from './Components/main/Profile'
import SearchList from './Components/table/SearchList'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Menu from './Components/main/Menu'
import chilango from './chilango'
import { isAuthenticated } from './auth'


const App = () => {
  const [theme, setTheme] = useState({ mode: 'dark' })
  const [englishPrimary, setEnglishPrimary] = useState(true)
  const [spanishPrimary, setSpanishPrimary] = useState(false)
  const [userProfileClicked, setUserProfileClicked] = useState(false)
  const [chilangos, setChilangos] = useState([])
  const [table, setTable] = useState(chilango[0])
  const { t, i18n } = useTranslation()
  function getLang (lang) {
    i18n.changeLanguage(lang)
  }


  useEffect(() =>{
    return fetch(`${process.env.REACT_APP_API_URL}/chilango`, {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  })
  .then(response=> {
      return response.json()
  })
  .catch(err => console.log(err)).then((data) => {
            if (data.error) {
              console.log(data.error)
            } else {
                setChilangos(data)
            }
          })
        }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={styles.App}>
        <Router>
          <main>
            <Header theme={theme} />
            {isAuthenticated ? (
              <Menu
                userProfileClicked={userProfileClicked}
                setUserProfileClicked={setUserProfileClicked}
              />
            ) : (
              <Redirect to='/signin' />
            )}
            <Switch>
              <Route exact path='/'>
                <Home
                  chilangos={chilangos}
                  chilango={chilango}
                  table={table}
                  setTable={setTable}
                  theme={theme}
                  t={t}
                  useTranslation={useTranslation}
                />
              </Route>
              <Route exact path='/signup'>
                <Signup />
              </Route>
              <Route exact path='/signin'>
                <Signin />
                </Route>
              <Route exact path='/user/searchlist'>
                <SearchList chilangos={chilangos} t={t}/>
              </Route>
              <Route exact path='/user/:userId'>
                <Profile
                  getLang={getLang}
                  setEnglishPrimary={setEnglishPrimary}
                  useTranslation={useTranslation}
                  setTheme={setTheme}
                  englishPrimary={englishPrimary}
                  setSpanishPrimary={setSpanishPrimary}
                  spanishPrimary={spanishPrimary}
                  t={t}
                  theme={theme}
                />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
