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
        console.log(users.results)
    }

    useEffect(() => {
    cardsData()
    }, [])

    
  return (
    <div className="App">
      <Route exact path='/home' render={() => <Cards users={users}/>}/>
      <Route path='/home/:id'  render={({match}) => <User />}/>
    </div>
  );

}
export default App;
