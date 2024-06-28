import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <nav>
            <ul className='navBar'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/resume">Curriculum</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar