import React from 'react'
import User from '../User/User'
import {useEffect, useState} from 'react'
import getData from '../../actions/getData'

export default function ProjectList() {

    const [projects, setProjects] = useState([])

    useEffect(async () => {
        let result = await getData('/projects')
      setProjects(result['results'])
    },[])

    return (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 py-3 gy-3 g-3">
            {projects.map(project => <User user={project} key={project.id} />)}
        </div>
    )
}