import React, { useState } from 'react'
import './App.css'

import ButtonToggle from './components/ButtonToggle'
import UserInput from './components/User/UserInput'
import UserOutput from './components/User/UserOutput'

function App() {
  const [visible, setVisible] = useState(false)
  const [users, setUsers] = useState([
    { id: 'a1', username: 'Adam', age: Math.floor(Math.random() * 80) },
    { id: 'a2', username: 'Ola', age: Math.floor(Math.random() * 80) },
    { id: 'a3', username: 'Beata', age: Math.floor(Math.random() * 80) },
    { id: 'a4', username: 'Dorota', age: Math.floor(Math.random() * 80) },
    { id: 'a5', username: 'Hania', age: Math.floor(Math.random() * 80) }
  ])

 function toggleOutput () {
   setVisible(!visible);
 }
 
  function deleteUser (id) {
    const userIndex = users.findIndex(user => user.id === id)
    const copiedUsers = [...users]
    copiedUsers.splice(userIndex, 1)
    setUsers(copiedUsers)
  }

  function changeUser (event, id) {
    const userIndex = users.findIndex(user => user.id === id)
    const copiedUsers = [...users]
    
    copiedUsers[userIndex].username = event.target.value

    setUsers(copiedUsers)
  }

  let output = null

  if (visible) {
    output = (
      <div>
        { users.map((user, index) => {
          return <UserOutput 
            key={ user.id }
            username={ user.username }
            age={ user.age }
            click={ () => deleteUser(user.id) }
            change={(event) => changeUser(event, user.id)}
            />
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello Friends!</h1>
      <ButtonToggle click={ toggleOutput }>Toggle Users</ButtonToggle>
      { output }
    </div>
  );
}

export default App;
