import React from 'react'
import styles from './ToDo.module.css'

export default function Project({todo, todoDelete}) {

    return (
        <div className="col">
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <div className={styles.header}>
                        <h5 className="card-title">{todo.project}</h5>
                        <div className={`${styles.status} ${todo.is_active ? "bg-success" : "bg-secondary"}`}>{todo.is_active ? "OPEN" : "DONE"}</div>
                    </div>
                    <h6 className="card-title">{todo.name}</h6>
                    <p className="card-text">{todo.description}</p>
                    <p className="card-text">{todo.create_time}</p>
                    <p className="card-text">{todo.update_time}</p>
                    <p className="card-text">Исполнитель: {todo.author}</p>
                    {todo.is_active && <button type="button" className="btn btn-primary" onClick={() => todoDelete(todo.id)}>Закрыть</button>}
                </div>
            </div>
        </div>
    )
}