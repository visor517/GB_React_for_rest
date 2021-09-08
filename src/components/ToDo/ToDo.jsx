import React from 'react'
import styles from './ToDo.module.css'

export default function Project({todo}) {

    return (
        <div className="col">
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <h5 className="card-title">{todo.project}</h5>
                    <h6 className="card-title">{todo.name}</h6>
                    <p className="card-text">{todo.description}</p>
                    <p className="card-text">{todo.create_time}</p>
                    <p className="card-text">{todo.update_time}</p>
                    <p className="card-text">Исполнитель: {todo.author}</p>
                    <div className={`${styles.status} ${todo.is_active ? "bg-warning" : "bg-success"}`}>{todo.is_active ? "OPEN" : "DONE"}</div>
                </div>
            </div>
        </div>
    )
}