import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home () {
   return (
    <div> 
        <Navbar />
        <h1>Bienvenido a mi Portfolio</h1>
        <p>Soy un desarrollador fullstack de 21 años, con un año de experiencia en el sector. Actualmente, estoy realizando un Bootcamp online</p>
        <p>A continuación un poco acerca de mí:</p>
        <p><Link to="/projects">Proyectos</Link></p>
        <p><Link to="/resume">Currículum</Link></p>
    </div>
   ) 
}

export default Home