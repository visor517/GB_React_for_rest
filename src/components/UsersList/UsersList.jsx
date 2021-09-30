import React, {useContext} from 'react'
import User from '../User/User'
import {useEffect, useState} from 'react'
import getData from '../../actions/getData'
import {AuthContext} from '../../context/Auth'

export default function UsersList() {

    const token = useContext(AuthContext)

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() { 
            if (token !== undefined) {
                let headers = {'Content-Type': 'application/json'}
                headers['Authorization'] = `Token ${token}`
                
                try {
                    let result = await getData('/users', {headers})

                    setUsers(result['results'])
                }
                catch {
                    console.log('Ошибка получения пользователей из API')
                }
            }
        }
        getUsers()
    },[token])

    return (
        <>
            <h2>Список пользователей</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
                {users.map(user => <User user={user} key={`user_${user.id}`} />)}
            </div>
        </>
    )
}