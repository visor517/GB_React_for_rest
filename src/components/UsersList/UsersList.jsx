import React from 'react'
import User from '../User/User'
import {useEffect, useState} from 'react'
import getData from '../../actions/getData'

export default function UsersList() {

    const [users, setUsers] = useState([])

    useEffect(async () => {
      setUsers(await getData('/users'))
    },[])

    return (
        <>
            <h2>Список пользователей</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
                {users.map(user => <User user={user} key={`user_${user.id}`} />)}
            </div>
        </>
    )
}