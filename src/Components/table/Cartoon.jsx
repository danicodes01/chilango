import React from "react"
import Card from "../UI/Card"
import styles from "./Cartoon.module.css"
const Cartoon = ({ t }) => {
  return (
    <Card>
      <div className={styles.illustration}>
        <h4>{t("cartoon")}</h4>
      </div>
    </Card>
  )
}

export default Cartoon
