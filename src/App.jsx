import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error404/Error404'
import UsersList from './components/UsersList/UsersList'
import ProjectsList from './components/ProjectsList/ProjectsList'
import ToDosList from './components/ToDosList/ToDosList'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path={'/users/'}><UsersList /></Route>
            <Route exact path={'/projects/'}><ProjectsList /></Route>
            <Route exact path={'/todos/'}><ToDosList /></Route>
            <Redirect from="/" exact to={'/projects/'} />
            <Route component={Error404} />
          </Switch>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
