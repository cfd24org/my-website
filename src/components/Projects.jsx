import React from 'react'
import projects from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <a key={p.id} className="project-card" href={p.repo} target="_blank" rel="noopener noreferrer">
            <div className="project-thumb">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
