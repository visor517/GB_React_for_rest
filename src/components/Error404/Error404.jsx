import React from 'react'

export default function Error404({location}) {

    console.log(location)

    return (
        <>
            <h1>Страницы не существуе</h1>
            <p>{location.pathname}</p>
        </>
    )
}