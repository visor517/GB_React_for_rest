import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Project.module.css'

export default function Project({project}) {

    const history = useHistory()

    return (
        <div className="col" onClick={() => history.push(`/project/${project.id}/todos`)}>
            <div className={`card ${styles.card}`}>
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <p className="card-text">{project.create_time}</p>
                    <p className="card-text">Авторы: {project.authors.join(", ")}</p>
                    <div className={`${styles.status} ${project.status === 'OPEN' ? "bg-warning" : "bg-success"}`}>{project.status}</div>
                </div>
            </div>
        </div>
    )
}