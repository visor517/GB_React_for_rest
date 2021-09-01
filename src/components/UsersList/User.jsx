import React from 'react'
//import styles from './User.module.css'

export default function User({user}) {

    return (
        <div className="col">
            <div className="card">
                <div class="card-body">
                    <h5 class="card-title">{user.username}</h5>
                    <p class="card-text">Имя: {user.first_name}</p>
                    <p class="card-text">Фамилия: {user.last_name}</p>
                    <p class="card-text">e-mail: {user.email}</p>
                </div>
            </div>
        </div>
    )
}