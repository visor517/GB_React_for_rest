import React from 'react'

export default function Header() {

    return (
        <header className="row bg-primary text-light py-3">
            <nav className="navbar navbar-light">
                <form className="container-fluid justify-content-start">
                    <button type="button" className="btn btn-outline-light me-2">Главная</button>
                    <button type="button" className="btn btn-outline-light">Не главная</button>
                </form>
            </nav> 
        </header>
    )
}