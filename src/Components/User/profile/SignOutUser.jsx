import React from "react"
import Card from '../../UI/Card'
import { signout } from "../../../auth"
import styles from "./SignOutUser.module.css"

const SignOutUser = ({ t, history }) => {
  return (
    <Card>
      <div className={styles.signouttahere}>
        <h3 className={styles.h3}>{t("adios")}</h3>
        <br/>
        <button onClick={() => signout(() => history.push("/signin"))}>
          {t("signout")}
        </button>
      </div>
    </Card>
  )
}

export default SignOutUser
