import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App dotted-grid">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Project />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App