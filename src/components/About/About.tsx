import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import { routerLinkStyles } from '../utilis';
const frontEnd: string[] = ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Material UI', 'Bootstrap'];
const backEnd: string[] = ['Node', 'Express', 'PostgreSQL', 'Sequelize', 'SQL'];
const other: string[] = ['Firebase', 'Git', 'Webpack'];
const About = () => {
  return (
    <div className="aboutContainer">
      <h1>About Me</h1>
      <div className="aboutMe">
        <h2>Hi, I'm Josh Owens</h2>
        <p>
          I am a full stack developer from California. I first became interested in programming in 2021, when I came
          across some open source resources to get started in the web development world. I became fascinated with web
          development, creating responsive applications with HTML and CSS, as well as interactive user experiences using
          JavaScript. This led me down a path of seriously considering software development as a career.
        </p>
        <p>
          I began taking courses at a local community college, I took introductory courses in Computer Science,
          Programming concepts, and System Design. These courses introduced me to the foundations of Computer
          Programming, where I learned mostly Python.
        </p>
        <p>
          Excited to progress my career in this field, I turned towards{' '}
          <a target="_blank" href="https://www.fullstackacademy.com/">
            Fullstack Academy
          </a>
          . Here I was able to dive completely into the world of creating full stack web applications. I learned to
          create back end database's and servers using Express and PostgreSQL. I learned to create interactive and
          responsive front end applications using React and Redux.
        </p>
        <p>
          Aside from software development, I enjoy playing the acoustic and electric guitar, reading, and hiking. I was
          also an NCAA Division 1 swimmer while pursuing my undergraduate degree. I enjoy giving back to the world of
          swimming, so each summer I coach a recreation swim team.
        </p>
      </div>
      <div className="technical">
        <h1>Technical Skills</h1>
        <h2>Front-End</h2>
        <ul>
          {frontEnd.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
        <h2>Back-End</h2>
        <ul>
          {backEnd.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
        <h2>Other</h2>
        <ul>
          {other.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </div>
      <div id="myProjects">
        <Link to="/projects" style={routerLinkStyles}>
          <button>Check out my projects &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
