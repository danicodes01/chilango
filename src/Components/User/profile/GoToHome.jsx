import React from "react"
import Card from "../../UI/Card"
import styles from "./GoToHome.module.css"
import { Link, withRouter } from "react-router-dom"

const GoToHome = ({ t }) => {
  return (
    <Card>
      <div className={styles.home}>
        <Link className={styles.link} to="/">
          {t("home")}
        </Link>
      </div>
    </Card>
  )
}

export default withRouter(GoToHome)
