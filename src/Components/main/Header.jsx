import React from "react"
import styles from "./Header.module.css"
import {Link, withRouter} from 'react-router-dom'


const Header = ({ theme }) => {

  return (
    <div className={styles.header}>
      <Link
    className={styles.link}
    to="/"
  >
      {theme.mode === "dark" && <h1>learnChilango 😻 </h1>}
      {theme.mode === "light" && <h1>learnChilango 😽</h1>}
  </Link>
    </div>
  )
}

export default withRouter(Header)
