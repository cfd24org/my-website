import './App.css'

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">Crisostomo</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
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
        <a href="https://github.com/cfd24" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/crisostomo-dunn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:crisostomodunn24@gmail.com">Email</a>
      </div>

      <p>
        <a className="cta" href="#projects">View projects</a>
        &nbsp;•&nbsp;
        <a className="cta" href="mailto:hello@crisostomodunn.com">Contact</a>
        &nbsp;•&nbsp;
        <a className="cta" href="/resume.html" target="_blank" rel="noopener noreferrer">View resume</a>
        &nbsp;•&nbsp;
        <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download resume</a>
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

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section id="resume" className="section resume-section">
        <h2>Resume</h2>
        <div className="resume-actions">
          <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download PDF</a>
          &nbsp;•&nbsp;
          <a className="cta" href="/resume.html" target="_blank" rel="noopener noreferrer">Open in new tab</a>
        </div>
        <div className="resume-container">
          <iframe src="/resume.pdf" title="Resume"></iframe>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Prefer email? <a href="mailto:crisostomodunn24@gmail.com">crisostomodunn24@gmail.com</a></p>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Crisostomo Dunn</p>
        <p>
          <a className="cta" href="/resume.html" target="_blank" rel="noopener noreferrer">View resume</a>
          &nbsp;•&nbsp;
          <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download resume (PDF)</a>
        </p>
      </footer>
    </main>
  )
}

export default App
