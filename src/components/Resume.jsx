import React from 'react'
import Navbar from './Navbar'
import { studies, experiences } from '../data/resume'

const Resume = () => (
    <div>
      <Navbar />
      <h1>Currículum</h1>
      <h2>Experiencia Laboral</h2>
      <ul className='experience-studies'>
        {experiences.map(experience => (
          <li key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.date}</p>
          </li>
        ))}
      </ul>
      <h2>Educación</h2>
      <ul className='experience-studies'>
        {studies.map(study => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>{study.institution}</p>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )

export default Resume