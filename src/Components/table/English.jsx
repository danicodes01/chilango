import React from "react"
import Card from "../UI/Card"
import styles from "./English.module.css"
import speaker from "../UI/media/speakerHigh.png"
import { useTranslation } from "react-i18next"

const English = ({ english }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <div>
        <p className={styles.gabacho}>{t("english")}</p>
        <p className={styles.english}>{english}</p>
        <img
          alt="heyo"
          src={speaker}
          className={styles.speaker}
          onClick={() =>
            alert(
              "🚧 voice translations are currently under construction 🚧 \n \n 🚧 los traductiones de voc estan en proceso de edificación 🚧"
            )
          }
        />
      </div>
    </Card>
  )
}

export default English
