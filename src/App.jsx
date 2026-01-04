import './App.css'
import React from 'react'
import Featured from './components/Featured'

function Nav() {
  return (
    <nav className="top-nav">
      <div className="nav-inner">
        <a className="nav-brand" href="/">Crisostomo</a>
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Nav />

      <header className="hero-large">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Hi — I’m Crisostomo</h1>
            <p className="hero-sub">Engineer & developer. I build focused, usable web apps and tools.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">See Projects</a>
              <a className="btn" href="mailto:crisostomodunn24@gmail.com">Contact</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/photo2.jpg" alt="profile" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="container">
            <h2>About</h2>
            <p>I focus on frontend engineering, automation, and building clear user experiences. I enjoy open-source and mentoring others.</p>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <h2>Projects</h2>
            <Featured />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Crisostomo Dunn</p>
        </div>
      </footer>
    </div>
  )
}
