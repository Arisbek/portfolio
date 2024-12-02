import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Arisbek/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching the projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;