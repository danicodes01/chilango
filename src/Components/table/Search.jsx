import React, { useState } from "react"
import styles from "./Search.module.css"
import Card from "../UI/Card"
import { Redirect } from 'react-router-dom'

const Search = ({ t }) => {

  const [redirectSearch, setRedirectSearch] = useState(false)

  return (
    <Card>
<div className={styles.search}>
  <div className={styles.text} onClick={() => {setRedirectSearch(true)}}>
  {t("searchCHilangos")}
    {redirectSearch && (
      <Redirect to='/user/searchList' />
    )}
  </div>


</div>
</Card> 
  )
}

export default Search
