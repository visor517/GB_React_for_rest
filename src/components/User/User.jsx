import React from 'react'
import styles from './User.module.css'

export default function User({user}) {

    return (
        <div className="col">
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">Имя: {user.first_name}</p>
                    <p className="card-text">Фамилия: {user.last_name}</p>
                    <p className="card-text">e-mail: {user.email}</p>
                </div>
            </div>
        </div>
    )
}