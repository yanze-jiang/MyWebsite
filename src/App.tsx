import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Education from './pages/Education'
import Project from './pages/Project'
import Moment from './pages/Moment'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename="/MyWebsite">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/moment" element={<Moment />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
