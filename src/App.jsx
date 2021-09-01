import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import User from './components/UsersList/User'

function App() {

  const data = {
    users: [
      {
        username: 'user1',
        first_name: 'user_name1',
        last_name: 'last_name1',
        email: 'email_1@none.net'
      },
      {
        username: 'user2',
        first_name: 'user_name2',
        last_name: 'last_name2',
        email: 'email_2@none.net'
      },
      {
        username: 'user3',
        first_name: 'user_name3',
        last_name: 'last_name3',
        email: 'email_3@none.net'
      }
    ]
  }

  return (
    <>
      <Header/>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3">
        {data.users.map(user => <User user={user} />)}
      </div>
      <Footer/>
    </>
  )
}

export default App
