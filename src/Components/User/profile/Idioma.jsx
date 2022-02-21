import React from "react"
import styles from './Idioma.module.css'
import Card from '../../UI/Card'

const Idioma = ({t, englishPrimary, getLang, setEnglishPrimary, setSpanishPrimary}) => {
  return (
    <Card>
      <div className={styles.idioma}>
      <h3 className={styles.h3}>{t("language")}</h3>
      <br/>
      {englishPrimary ? (
        <button
          onClick={() => {
            getLang("sp")
            setEnglishPrimary(false)
            setSpanishPrimary(true)
          }}
        >
          {t("spanishBtn")}
        </button>
      ) : (
        <button
          onClick={() => {
            getLang("en")
            setSpanishPrimary(false)
            setEnglishPrimary(true)
          }}
        >
          {t("englishBtn")}
        </button>
      )}
      </div>
    </Card>
  )
}

export default Idioma


