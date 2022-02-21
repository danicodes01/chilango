// import React, { useEffect, useState } from "react"
// import { getPosts } from "../post/apiPost"
// import {Link} from 'react-router-dom'

// const Posts = () => {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     getPosts().then((data) => {
//       if (data.error) {
//         console.log(data.error)
//       } else {
//           setPosts(data)
    
//       }
//     })
//   }, [])

//   console.log(posts)
  
// return (
//     <div>
//          {posts.map((post, i) => (
//       <div key={i}>
//           <p>{post.phrase}</p>
//       </div>
//     ))}

//     </div>
// )
 
// }

// export default Posts
