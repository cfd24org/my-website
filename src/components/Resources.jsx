import React from 'react'
import '../App.css'

const mirrors = [
  { name: 'Computer Vision DeCal (full repo)', url: 'https://github.com/cfd24org/cv_decal' },
  { name: 'Data100 (full repo)', url: 'https://github.com/cfd24org/data100' },
  { name: 'Data8', url: 'https://github.com/cfd24org/data8' },
  { name: '61B — fa24-s181 (mirror)', url: 'https://github.com/cfd24org/fa24-s181' },
  { name: '61B — proj3 (g303)', url: 'https://github.com/cfd24org/fa24-proj3-g303' },
  { name: 'CS162 — student617', url: 'https://github.com/cfd24org/student617' },
  { name: 'CS162 — group21', url: 'https://github.com/cfd24org/group21' },
  { name: 'Sentient Chat Hack App', url: 'https://github.com/cfd24org/SentientChatHack---App' },
  { name: 'Seekers Alliance Projects', url: 'https://github.com/cfd24org/Seekers_Alliance_Projects' },
  { name: 'Code Tenderloin Projects', url: 'https://github.com/cfd24org/CodeTenderloinProjects' },
  { name: 'honkai_stuff', url: 'https://github.com/cfd24org/honkai_stuff' },
  { name: 'kevini', url: 'https://github.com/cfd24org/kevini' },
]

export default function Resources() {
  return (
    <main>
      <header className="hero">
        <h1>Crisostomo Dunn</h1>
        <p className="tagline">Engineer &amp; developer — building thoughtful web experiences.</p>
        <div className="socials">
          <a href="https://github.com/cfd24org" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/crisostomo-dunn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:crisostomodunn24@gmail.com">Email</a>
        </div>
        <p>
          <a className="cta" href="/">Home</a>
        </p>
      </header>

      <section id="resources" className="section">
        <h2>Resources</h2>
        <div className="resource-cards">
          <div className="resource">
            <h3>Resume</h3>
            <p>View or download the latest resume.</p>
            <p>
              <a className="cta" href="/resume.html" target="_blank" rel="noopener noreferrer">Open resume</a>
              &nbsp;•&nbsp;
              <a className="cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download PDF</a>
            </p>
          </div>
          <div className="resource">
            <h3>Unofficial Transcript</h3>
            <p>View the unofficial transcript.</p>
            <p>
              <a className="cta" href="/unofficial_transcript_cd.pdf" target="_blank" rel="noopener noreferrer">Open transcript (PDF)</a>
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Project Mirrors</h2>
        <ul>
          {mirrors.map((m) => (
            <li key={m.url}><a href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a></li>
          ))}
        </ul>
      </section>
    </main>
  )
}
