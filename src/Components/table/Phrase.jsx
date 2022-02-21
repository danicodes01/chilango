import React from "react"
import Card from "../UI/Card"
import styles from "./Phrase.module.css"
import speaker from "../UI/media/speakerHigh.png"

import { useTranslation } from "react-i18next"
const Phrase = ({ phrase }) => {
  const { t } = useTranslation()
  return (
    <Card>
      <div className={styles.hey}>
        <p className={styles.chili}>{t("chilango")}</p>
        <p className={styles.phrase}>{phrase}</p>
        <div className={styles.imagebox}>
          <img
            alt="heyo"
            src={speaker}
            className={styles.speaker}
            onClick={() =>
              alert("🚧 voice translations are currently under construction 🚧 \n \n 🚧 los traductiones de voc estan en proceso de edificación 🚧" )
            }
          />
        </div>
      </div>
    </Card>
  )
}

export default Phrase
