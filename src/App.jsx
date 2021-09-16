import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error404/Error404'
import UsersList from './components/UsersList/UsersList'
import ProjectsList from './components/ProjectsList/ProjectsList'
import ToDosList from './components/ToDosList/ToDosList'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import Cookies from 'universal-cookie/es6'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {AuthContext} from './context/Auth'

function App() {

  const [contextToken, setContextToken] = useState(undefined)

  function getToken(username, password) {
    let data = {username: username, password: password}
    axios.post('http://127.0.0.1:8000/api-token-auth/', data)
      .then(res => {
        setToken(res.data['token'])
      })
      .catch(err => alert('Неверный логин или пароль'))
  }

  function setToken(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    setContextToken(token)
  }

  function getTokenFromCookies() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    setContextToken(token)
  }

  function logout() {
    setContextToken(undefined)
  }

  useEffect(() => getTokenFromCookies(), [])

  return (
    <AuthContext.Provider value = {contextToken}>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path={'/login'}><LoginForm getToken={(username, password) => getToken(username, password)} /></Route>
            <Route exact path={'/users'}><UsersList /></Route>
            <Route exact path={'/projects'}><ProjectsList /></Route>
            <Route exact path={'/todos'}><ToDosList /></Route>
            <Route exact path={'/project/:project_id/todos'}><ToDosList /></Route>
            <Redirect from="/" exact to={'/projects'} />
            <Route component={Error404} />
          </Switch>
          <Footer/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
