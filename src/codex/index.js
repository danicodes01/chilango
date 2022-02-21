// const Button = styled.button`
//   color: ${props => (props.theme.mode === 'dark' ? 'black' : 'black')};
//   padding: 12px 15px;
//   background-color: ${props =>
//     props.theme.mode === 'dark' ? 'gray' : 'gray'};
//   opacity: 0.75;
//   font-size: 15px;
//   width: 100%;
//   border-radius: 3px;
//   border-width: 0.5px;
//   border-color: gray;
//   margin-top: 15px;
//   transition: ease 0.01s all;
//   text-transform: uppercase;
//   box-shadow: 0px 2px 2px gray;
//   text-align: center;
//   transition: ease background-color 250ms;
//   :active {
//     opacity: 0.3;
//     color: black;
//     background-color: ${props =>
//       props.theme.mode === 'dark' ? 'aliceblue' : 'purple'};
//   }
// `

// import Search from "../Components/table/Search";

                     /////////////////////////////////////////////////

//components/main/Search.jsx

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

                     /////////////////////////////////////////////////
// search list




// import React, { useEffect, useState } from "react"
// import styles from "./SearchList.module.css"
// import { Redirect, withRouter, Link } from "react-router-dom"
// import Card from "../UI/Card"
// import Phrase from "./Phrase"
// import Spanish from "./Spanish"
// import English from "./English"
// import Examples from "./Examples"
// import { useParams } from "react-router-dom"

// const SearchList = ({ table, chilango, chilangos, theme, t, history }) => {
//   // const [inputView, setInputView] = useState(false)
//   // const [search, setSearch] = useState("")
//   const [searchInput, setSearchInput] = useState("")
//   const [searchResults, setSearchResults] = useState([])
//   const [redirectHome, setRedirectHome] = useState(false)
//   const [selectedPhrase, setSelectedPhrase] = useState(false)
//   const [inputClicked, setInputClicked] = useState(false)
//   const [selectedPhraseValue, setSelectedPhraseValue] = useState(searchInput)
//   const inputLength = searchInput.length > 0
//   const { userId } = useParams()

//   const isActive = (history, path) => {
//     if (history.location.pathname === path) {
//       return { color: "gray" }
//     } else {
//       return { color: "gray" }
//     }
//   }

//   const inputChangeHandler = (e) => {
//     setSearchInput(e.target.value)
//     setSelectedPhrase(false)
//     setSelectedPhraseValue([])
//   }

//   useEffect(() => {
//     const results = chilangos.filter(
//       (chil) =>
//       chil.phrase.toLowerCase().indexOf(searchInput) !== -1 ||
//       chil.english.toLowerCase().indexOf(searchInput) !== -1 ||
//       chil.spanish.toLowerCase().indexOf(searchInput) !== -1
//       )
//       setSearchResults(results)
//     }, [searchInput])

//   console.log('value', selectedPhraseValue.phrase)

//   return (
//     <Card>
//       <div className={styles.hello}>
//         <div className={styles.search_input}>
//           {/* <label htmlFor="search"></label> */}
//           <input
//             type="text"
//             // id="search"
//             placeholder={t("searchBar")}
//             value={searchInput}
//             onChange={inputChangeHandler}

//           />
//           {inputLength ? (
//             searchResults.map((result) => (
//               <div key={result._id} className={styles.home}>
//                 {searchInput.toLowerCase() === result.phrase.toLowerCase() ||
//                 searchInput.toLowerCase() === result.english.toLowerCase() ||
//                 searchInput.toLowerCase() === result.spanish.toLowerCase() ? (
//                   <div>
//                     <Phrase phrase={result.phrase} />
//                     <Spanish theme={theme} spanish={result.spanish} />
//                     <English english={result.english} />
//                     <Examples
//                       exampleS={result.exampleS}
//                       exampleSb={result.exampleSb}
//                       exampleE={result.exampleE}
//                       exampleEb={result.exampleEb}
//                     />
//                   </div>
//                 ) : (
//                   <div>
//                     <div>
//                       {selectedPhrase && (
//                         <div>
//                         <Phrase phrase={selectedPhraseValue.phrase} />
//                         <Spanish theme={theme} spanish={selectedPhraseValue.spanish} />
//                         <English english={selectedPhraseValue.english} />
//                         <Examples
//                           exampleS={selectedPhraseValue.exampleS}
//                           exampleSb={selectedPhraseValue.exampleSb}
//                           exampleE={selectedPhraseValue.exampleE}
//                           exampleEb={selectedPhraseValue.exampleEb}
//                         />
//                       </div>
//                       )}
//                     </div>
//                     <ul>
//                       <li value={selectedPhraseValue} onClick={() => {
//                         setSelectedPhrase(true)
//                         setSelectedPhraseValue(result)}}>
//                         {result.phrase}
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))
//           ) : (
//             <div>
//               <Link
//                 className={styles.link}
//                 style={isActive(history, "/")}
//                 to="/"
//               >
//                 {t("home")}
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default withRouter(SearchList)


                     /////////////////////////////////////////////////
// main/profile.jsx

// useEffect(() => {
//     const userId = props.match.params.userId
//     fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${isAuthenticated().token}`,
//       },
//     })
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         if (data.error) {
//           setGotoSignIn(true)
//         } else {
//           setUser(data)
//         }
//       })
//   }, [])

// {
/* <div>
<div className={styles.userProfle}>
  <h2>Profile</h2>
  <p>Hello {isAuthenticated().user.name}</p>
  <p>email</p>
  <p>{`joined: ${new Date(user.created).toDateString()}`}</p>
</div>
<div>
  {isAuthenticated().user && isAuthenticated().user._id === user._id && (
    <div>
      <Link to={`/user/edit/${user._id}`}>Edit Profile</Link>
  <DeleteUser />
</div>
  )}
</div>
</div> */
// }

// const Button = styled.div`
//   color: ${(props) => (props.theme.mode === "dark" ? "black" : "black")};
//   padding: 12px 15px;
//   background-color: ${(props) =>
//     props.theme.mode === "dark" ? "aliceblue" : "aliceblue"};
//   opacity: 0.75;
//   font-size: 12px;
//   border-radius: 3px;
//   border-width: 0.5px;
//   border-color: black;
//   transition: ease 0.01s all;
//   text-transform: uppercase;
//   box-shadow: 0px 2px 2px black;
//   text-align: center;

//   transition: ease background-color 250ms;
//   :active {
//     opacity: 0.5;
//     color: black;
//     background-color: ${(props) =>
//       props.theme.mode === "dark" ? "aliceblue" : "aliceblue"};
//   }
// `


                     /////////////////////////////////////////////////




                     /////////////////////////////////////////////////





                     /////////////////////////////////////////////////


                     /////////////////////////////////////////////////\
                     /////////////////////////////////////////////////
                     /////////////////////////////////////////////////