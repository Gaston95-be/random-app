import './App.css';
import Cards from './components/cards/Cards'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import User from './components/userdetail/user';

const URL = `https://randomuser.me/api/?results=50`

function App() {
    const [users, setUsers] = useState([])

    const cardsData = async () => {
        const response = await axios.get(URL)
        const users =  await response.data
        setUsers(users.results)
    }

    useEffect(() => {
    cardsData()
    }, [])

    function onFilter(userId) {
      let user = users.find(c => c.login.uuid === userId)
      if(user) {
          return user
      } else {
          return null
      }
    }
    
  return (
    <div className="App">
      <Route  exact path='/' render={() => <Cards users={users}/>}/>
      <Route  path="/user/:id"  render={({match}) => <User user={onFilter(match.params.id)}/>} />
    </div>
  );

}
export default App;
