import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <header className="row bg-primary text-light py-3">
            <nav className="navbar navbar-light">
                <form className="container-fluid justify-content-start">
                    <Link to={'/projects'}>
                        <button type="button" className="btn btn-outline-light me-2">Проекты</button>
                    </Link>
                    <Link to={'/todos'}>
                        <button type="button" className="btn btn-outline-light me-2">Задачи</button>
                    </Link>
                    <Link to={'/users'}>
                        <button type="button" className="btn btn-outline-light me-2">Пользователи</button>
                    </Link>
                    {props.authNav}
                </form>
            </nav> 
        </header>
    )
}