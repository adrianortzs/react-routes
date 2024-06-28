import React from 'react'
import Navbar from './Navbar'
import projects from '../data/projects'

function Projects () {
    return (
    <div>
        <Navbar />
        <h1>Mis proyectos</h1>
        <ul className='projects'>
            {projects.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description}</p>
                </li>))}
        </ul>
    </div>
    )
}

export default Projects