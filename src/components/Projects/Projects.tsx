import React from 'react';
import { Card } from '@mui/material';
import projects from './ProjectsInfo';
import './projects.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
const Projects = () => {
  const { darkMode } = useSelector((state: RootState) => state.viewMode);

  return (
    <div className={!darkMode ? 'projectsContainer' : 'projectsContainerDark'}>
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <Card sx={{ width: '300px', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
              <img src={project.image} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="links">
                <a target="_blank" href={project.github}>
                  Github &rarr;
                </a>
                <a target="_blank" href={project.live}>
                  Site &rarr;
                </a>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
