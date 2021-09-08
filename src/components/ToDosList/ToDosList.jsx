import React from 'react'
import ToDo from '../ToDo/ToDo'
import {useEffect, useState} from 'react'
import getData from '../../actions/getData'

export default function ToDosList() {

    const [todos, setTodos] = useState([])

    useEffect(async () => {
        let result = await getData('/todos')
      setTodos(result['results'])
    },[])

    return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
            {todos.map(todo => (
                    <div className="col">
                        <ToDo todo={todo} key={todo.id} />
                    </div>
                )
            )}
        </div>
    )
}