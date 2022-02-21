import React, { useEffect, useState } from "react"
import { list } from "./apiUser"
const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    list().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })
  }, [])

const renderUsers = (users) => (
  <div>
    {users.map((user, i) => (
      <div key={i}>
          <p>{user.name}</p>
      </div>
    ))}
  </div>
)
  return (
    <div>
      
      <h2>users</h2>
        {renderUsers(users)}
      
    </div>
  )
}

export default Users
