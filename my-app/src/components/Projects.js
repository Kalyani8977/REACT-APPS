import React from 'react';

function Projects() {
  const projectList = [
    { title: "Project 1", description: "A cool project built with React." },
    { title: "Project 2", description: "An amazing application using Node.js." },
    { title: "Project 3", description: "A portfolio website showcasing skills." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
