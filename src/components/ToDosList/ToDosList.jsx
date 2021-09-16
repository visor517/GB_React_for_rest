import React, {useContext} from 'react'
import ToDo from '../ToDo/ToDo'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import getData from '../../actions/getData'
import {AuthContext} from '../../context/Auth'

export default function ToDosList() {

    const token = useContext(AuthContext)

    let {project_id} = useParams()

    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function getToDos() {
            if (token !== undefined) {
                let headers = {'Content-Type': 'application/json'}
                headers['Authorization'] = `Token ${token}`

                let url = '/todos'
                if (project_id) url += `?project=${project_id}`

                try {
                    let result = await getData(url, {headers})
                    setTodos(result['results'])
                }
                catch {
                    console.log('Ошибка получения данных из API')
                }
            }
        }
        getToDos()
    },[token, project_id])

    return (
        <>
            <h2>Список задач</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
                {todos.length > 0 ? todos.map(todo => <ToDo todo={todo} key={`todo_${todo.id}`} />) : <h3>Ещё нет задач</h3>}
            </div>
        </>
    )
}