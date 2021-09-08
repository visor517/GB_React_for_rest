import React from 'react'
import styles from './Project.module.css'

export default function Project({project}) {

    return (  
        <div className={`card ${styles.card}`}>
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <p className="card-text">{project.create_time}</p>
                <div className={`${styles.status} ${project.status === 'OPEN' ? "bg-warning" : "bg-success"}`}>{project.status}</div>
            </div>
        </div>
    )
}