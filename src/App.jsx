import './App.css'
import Projects from './components/Projects'

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

      <section id="courses" className="section courses-section">
        <div className="semester">
          <h3>Fall 2023</h3>
          <ul>
            <li>AMERSTD 10 — Introduction to American Studies (4) — B+</li>
            <li>EPS 88 — PyEarth: A Python Introduction to Earth Science (2) — A</li>
            <li>HISTORY 30 — Science and Society (4) — A-</li>
            <li>ISF 60 — Technology and Values (3) — A</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Spring 2024</h3>
          <ul>
            <li>COMPSCI 61A — The Structure and Interpretation of Computer Programs (4) — A+</li>
            <li>COMPSCI 70 — Discrete Mathematics and Probability Theory (4) — A</li>
            <li>COMPSCI 197 — Field Study (2) — P</li>
            <li>COMPSCI 198 — Directed Group Studies for Advanced Undergraduates (2) — P</li>
            <li>DATA C8 — Foundations of Data Science (4) — A</li>
            <li>ITALIAN R5A — Reading and Composition (4) — B</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Fall 2024</h3>
          <ul>
            <li>COGSCI 1 — Introduction to Cognitive Science (4) — A-</li>
            <li>COMPSCI 61B — Data Structures (4) — A</li>
            <li>COMPSCI 197 — Field Study (1) — P</li>
            <li>COMPSCI 198 — Directed Group Studies for Advanced Undergraduates (1) — P</li>
            <li>DATA C100 — Principles & Techniques of Data Science (4) — A</li>
            <li>STAT 98 — Directed Group Study (2) — P</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Spring 2025</h3>
          <ul>
            <li>EECS 126 — Probability and Random Processes (4) — A-</li>
            <li>ELENG 120 — Signals and Systems (4) — A-</li>
            <li>MATH 104 — Introduction to Analysis (4) — C</li>
            <li>MATH 110 — Abstract Linear Algebra (4) — A</li>
            <li>MATH 198 — Directed Group Study (1) — P</li>
          </ul>
        </div>

        <div className="semester">
          <h3>Fall 2025</h3>
          <ul>
            <li>COMPSCI 61C — Great Ideas of Computer Architecture (4) — (in progress)</li>
            <li>COMPSCI 162 — Operating Systems and System Programming (4) — (in progress)</li>
            <li>COMPSCI 170 — Efficient Algorithms and Intractable Problems (4) — (in progress)</li>
            <li>UGIS 192B — Supervised Research: Social Sciences (4) — (in progress)</li>
          </ul>
        </div>

      </section>

      <Projects />

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
