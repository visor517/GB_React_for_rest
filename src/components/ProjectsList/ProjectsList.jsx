import React, {useContext} from 'react'
import Project from '../Project/Project'
import {useEffect, useState} from 'react'
import getData from '../../actions/getData'
import {AuthContext} from '../../context/Auth'

export default function ProjectsList() {

    const token = useContext(AuthContext)

    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function getProjects() {
            if (token !== undefined) {
                let headers = {'Content-Type': 'application/json'}
                headers['Authorization'] = `Token ${token}`

                try {
                    let result = await getData('/projects', {headers})

                    setProjects(result['results'])
                }
                catch {
                    console.log('Ошибка получения данных из API')
                }
            }
        }
        getProjects()
    },[token])

    return (
        <>
            <h2>Список проектов</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
                {projects.map(project => <Project project={project} key={`project_${project.id}`} />)}
            </div>
        </>
    )
}