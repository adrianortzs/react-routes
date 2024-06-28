import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/resume" element={<Resume/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes