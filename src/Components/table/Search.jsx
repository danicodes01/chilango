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
// import React, { useEffect, useState } from "react"
// import styles from "./Search.module.css"
// import Card from "../UI/Card"

// const Search = ({ table, chilango, chilangos }) => {
//   // const [inputView, setInputView] = useState(false)
//   // const [search, setSearch] = useState("")
//   const [searchInput, setSearchInput] = useState("")
//   const [searchResults, setSearchResults] = useState([])

//   // const addInputHandler = (e) => {
//   //   e.preventDefault()
//   //   const user = {
//   //     email: enteredEmail,
//   //     password: enteredPassword,
//   //   }
//   // }
//   const inputChangeHandler = (e) => {
//     setSearchInput(e.target.value)
//   }

//   useEffect(() => {
//     const results = chilangos.filter((chil) =>
//       chil.phrase.toLowerCase().indexOf(searchInput) !== -1
//     )
//     setSearchResults(results)
//   }, [searchInput])

//   console.log('hey', searchResults)
//   // console.log('searchy herererererre', chilangos)

//   // const searchy = chilangos
//   //   .filter(
//   //     (chil) =>
//   //       chil.phrase.toLowerCase().indexOf(input) !== -1 ||
//   //       chil.english.toLowerCase().indexOf(input) === -1
//   //   )
//   //   .map((chil) => {
//   //     return <div key={chil.id}></div>
//   //   })

//   // console.log(searchy)

//   return (
//     <Card>
//       <div className={styles.search}>
//         <div className={styles.input}>
//           <h4>search</h4>
//           {/* <label htmlFor="search"></label> */}
//           <input
//             type="text"
//             // id="search"
//             placeholder="search a word or phrase"
//             value={searchInput}
//             onChange={inputChangeHandler}
//           />
//           {searchInput.length > 0 && (
//             searchResults.map(result => (
//               <div className={styles.hello}>
//                 <ul>
//                   <li>
//                     {result.phrase}
//                   </li>
//                 </ul>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default Search
