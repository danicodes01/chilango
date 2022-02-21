import React from "react"
import Card from "../UI/Card"
import styles from "./Examples.module.css"
import speaker from "../UI/media/speakerHigh.png"

const Examples = (props) => {
  return (
    <Card>
      <div>
        {props.exampleSb ? (
          <div className={styles.examples}>
            <p>{props.exampleS}</p>
            <p>{props.exampleSb}</p>
            <br />
            <p>{props.exampleE}</p>
            <p>{props.exampleEb}</p>
          </div>
        ) : (
          <div className={styles.examples}>
            <p>{props.exampleS}</p>
            <br />
            <p>{props.exampleE}</p>
          </div>
        )}
        <img
          alt="heyo"
          src={speaker}
          className={styles.speaker}
          onClick={() =>
            alert("🚧 voice translations are currently under construction 🚧 \n \n 🚧 los traductiones de voc estan en proceso de edificación 🚧" )
          }
        />
      </div>
    </Card>
  )
}

export default Examples
