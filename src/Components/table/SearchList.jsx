import React, { useEffect, useState } from "react"
import styles from "./SearchList.module.css"
import { withRouter, Link } from "react-router-dom"
import Card from "../UI/Card"
import Phrase from "./Phrase"
import Spanish from "./Spanish"
import English from "./English"
import Examples from "./Examples"

const SearchList = ({ chilangos, theme, t }) => {

  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedPhrase, setSelectedPhrase] = useState(false)
  const [selectedPhraseValue, setSelectedPhraseValue] = useState(searchInput)
  const inputLength = searchInput.length > 0



  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value)
    setSelectedPhrase(false)
    setSelectedPhraseValue([])
  }

  useEffect(() => {
    const results = chilangos.filter(
      (chil) =>
        chil.phrase.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        chil.english.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        chil.spanish.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    )
    setSearchResults(results)
  }, [chilangos, searchInput])

  return (
    <Card>
      <div className={styles.hello}>
        <div className={styles.search_input}>
          <input
            type="text"
            placeholder={t("searchBar")}
            value={searchInput}
            onChange={inputChangeHandler}
          />
          {inputLength ? (
            searchResults.map((result) => (
              <div key={result._id} className={styles.home}>
                {!selectedPhrase &&
                  searchInput.toLowerCase() !== result.phrase.toLowerCase() &&
                  searchInput.toLowerCase() !== result.english.toLowerCase() &&
                  searchInput.toLowerCase() !==
                    result.spanish.toLowerCase() && (
                    <div>
                      <ul>
                        <li
                          value={selectedPhraseValue}
                          onClick={() => {
                            setSelectedPhrase(true)
                            setSelectedPhraseValue(result)
                          }}
                        >
                          {result.phrase}
                        </li>
                      </ul>
                    </div>
                  )}
                  
                {searchInput.toLowerCase() === result.phrase.toLowerCase() ||
                searchInput.toLowerCase() === result.english.toLowerCase() ||
                searchInput.toLowerCase() === result.spanish.toLowerCase() ? (
                  <div>
                    <Phrase phrase={result.phrase} />
                    <Spanish theme={theme} spanish={result.spanish} />
                    <English english={result.english} />
                    <Examples
                      exampleS={result.exampleS}
                      exampleSb={result.exampleSb}
                      exampleE={result.exampleE}
                      exampleEb={result.exampleEb}
                    />
                  </div>
                ) : (
                  <div>
                    <div>
                      {selectedPhrase && (
                        <div className={styles.phrases}>
                          <Phrase phrase={selectedPhraseValue.phrase} />
                          <Spanish
                            theme={theme}
                            spanish={selectedPhraseValue.spanish}
                          />
                          <English english={selectedPhraseValue.english} />
                          <Examples
                            exampleS={selectedPhraseValue.exampleS}
                            exampleSb={selectedPhraseValue.exampleSb}
                            exampleE={selectedPhraseValue.exampleE}
                            exampleEb={selectedPhraseValue.exampleEb}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>
              <Link
                className={styles.link}
                to="/"
              >
                {t("home")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

export default withRouter(SearchList)


















