import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Project from './pages/Project'

function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Project />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
