import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error404/Error404'
import UsersList from './components/UsersList/UsersList'
import ProjectList from './components/ProjectList/ProjectList'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
        <Header/>
          <Switch>
            <Route exact path={'/users'}><UsersList /></Route>
            <Route exact path={'/projects'}><ProjectList /></Route>
            <Redirect from="/" exact to={'/projects'} />
            <Route component={Error404} />
          </Switch>
          <Footer/>
      </HashRouter>
    </>
  )
}

export default App
