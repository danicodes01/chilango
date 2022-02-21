import React from 'react'
import styles from './Darkmode.module.css'
import Card from '../../UI/Card'



const Darkmode = ({theme, t, setTheme}) => {
    return (
      <Card>

        <div className={styles.darkmode}>
        <br />
        {theme.mode === "light" ? (
          <h3 className={styles.h3}>{t("darkModeTxt")}</h3>
        ) : (
          <h3 className={styles.h3}>{t("lightModeTxt")}</h3>
        )}
        <br/>
        {theme.mode === "light" ? (
          <button
            onClick={() => {
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }}
          >
            {t("darkModeBtn")}
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }}
          >
            {t("lightModeBtn")}
          </button>
        )}
        </div>
      </Card>
    )
}

export default Darkmode

