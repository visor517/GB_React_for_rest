import React from 'react'
import ToDo from '../ToDo/ToDo'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import getData from '../../actions/getData'

export default function ToDosList() {

    let {project_id} = useParams()

    const [todos, setTodos] = useState([])

    useEffect(async () => {
        let url = '/todos'
        if (project_id) url += `?project=${project_id}`

        let result = await getData(url)
      setTodos(result['results'])
    },[])

    return (
        <>
            <h2>Список задач</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
                {todos.length > 0 ? todos.map(todo => <ToDo todo={todo} key={`todo_${todo.id}`} />) : <h3>Ещё нет задач</h3>}
            </div>
        </>
    )
}