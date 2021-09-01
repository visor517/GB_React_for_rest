import React from 'react'
import User from '../User/User'

export default function UsersList({users}) {

    return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
            {users.map(user => <User user={user} key={user.username} />)}
        </div>
    )
}