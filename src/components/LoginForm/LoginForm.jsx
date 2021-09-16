import React, {useState} from 'react'

export default function LoginForm(props) {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    function handlerOnChange(e) {
        userInfo[e.target.name] = e.target.value
        setUserInfo(userInfo)
    }

    function handlerOnSubmit(e) {
        props.getToken(userInfo.username, userInfo.password)
        e.preventDefault()
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <form onSubmit={(event) => handlerOnSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-label">Пользователь:</label>
                        <input type="text" className="form-control" id="inputUser" name="username" onChange={(event) => handlerOnChange(event)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Пароль:</label>
                        <input type="password" className="form-control" id="inputPassword" name="password" onChange={(event) => handlerOnChange(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Авторизоваться</button>
                </form>
            </div>
        </div>
    )
}