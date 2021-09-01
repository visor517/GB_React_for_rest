import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import UsersList from './components/UsersList/UsersList'
import {useEffect, useState} from 'react'

const axios = require('axios')

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log(`Ошибка запроса к API: ${err}`))
  },[])

  return (
    <>
      <Header/>
      <UsersList users={users} />
      <Footer/>
    </>
  )
}

export default App
