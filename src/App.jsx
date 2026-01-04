import './App.css'
// Projects component not imported in main app nav to avoid unused import
import React from 'react'
import Featured from './components/Featured'

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="/" className="nav-brand">Crisostomo</a>
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/more-info.html">More Info</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <img src="/photo1.jpg" alt="Crisostomo Dunn" className="profile" />
      <h1>Crisostomo Dunn</h1>
      <p className="tagline">Engineer &amp; developer — building thoughtful web experiences.</p>

      <div className="socials">
        <a href="https://github.com/cfd24org" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/crisostomo-dunn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:crisostomodunn24@gmail.com">Email</a>
      </div>

      <p>
        <a className="cta" href="#projects">View projects</a>
        &nbsp;•&nbsp;
        <a className="cta" href="/more-info.html" target="_blank" rel="noopener noreferrer">More Info</a>
      </p>
    </header>
  )
}

function ProjectCard({ title, description, url }) {
  return (
    <article className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">View</a>
        </p>
      )}
    </article>
  )
}

function App() {
  // No password gate in production. Render the app directly.

  const projects = [
    { title: 'Project One', description: 'Short description of project one.', url: '#' },
    { title: 'Project Two', description: 'Short description of project two.', url: '#' },
    { title: 'Project Three', description: 'Short description of project three.', url: '#' },
  ]

  return (
    <main>
      <a id="top" />
      <Nav />
      <Hero />

      <section id="about" className="section">
        <h2>About</h2>
        <p>I build web apps and design simple user experiences. I enjoy frontend engineering, automation, and open-source.</p>
      </section>

      {/* courses moved off the homepage; full transcript in Resources page */}

      <Featured />

      {/* keep Projects component on the resources page only */}

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:crisostomodunn24@gmail.com">crisostomodunn24@gmail.com</a></p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Crisostomo Dunn</p>
        <p>
          <a className="cta" href="/more-info.html" target="_blank" rel="noopener noreferrer">More Info</a>
        </p>
      </footer>
    </main>
  )
}

export default App
