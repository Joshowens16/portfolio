import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import { routerLinkStyles } from '../utilis';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const frontEnd: React.ReactElement[] = [
  <i className="devicon-html5-plain-wordmark colored"></i>,
  <i className="devicon-css3-plain-wordmark colored"></i>,
  <i className="devicon-javascript-plain colored"></i>,
  <i className="devicon-typescript-plain colored"></i>,
  <i className="devicon-react-original-wordmark colored"></i>,
  <i className="devicon-redux-original colored"></i>,
  <i className="devicon-materialui-plain colored"></i>,
  <i className="devicon-bootstrap-plain-wordmark colored"></i>,
];
const backEnd: React.ReactElement[] = [
  <i className="devicon-nodejs-plain-wordmark colored"></i>,
  <i className="devicon-express-original-wordmark colored"></i>,
  <i className="devicon-postgresql-plain-wordmark colored"></i>,
  <i className="devicon-sequelize-plain-wordmark colored"></i>,
];
const other: React.ReactElement[] = [
  <i className="devicon-firebase-plain-wordmark colored"></i>,
  <i className="devicon-git-plain-wordmark colored"></i>,
  <i className="devicon-github-original-wordmark colored"></i>,
  <i className="devicon-webpack-plain colored"></i>,
];

const About = () => {
  const { darkMode } = useSelector((state: RootState) => state.viewMode);
  return (
    <div className={!darkMode ? 'aboutContainerLight' : 'aboutContainerDark'}>
      <h1>About Me</h1>
      <div className={!darkMode ? 'aboutMeLight' : 'aboutMeDark'}>
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
      <div className={!darkMode ? 'technicalLight' : 'technicalDark'}>
        <h1>Technical Skills</h1>
        <h2>Front-End</h2>
        <div className="frontend">
          {frontEnd.map((skill) => {
            return skill;
          })}
        </div>
        <h2>Back-End</h2>
        <div className={!darkMode ? 'backendLight' : 'backendDark'}>
          {backEnd.map((skill) => {
            return skill;
          })}
        </div>
        <h2>Other</h2>
        <div className="other">
          {other.map((skill) => {
            return skill;
          })}
        </div>
      </div>
      <div id={!darkMode ? 'myProjects' : 'darkMyProjects'}>
        <Link to="/projects" style={routerLinkStyles}>
          <button>Check out my projects &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
