import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const Footer = () => {
  const { darkMode } = useSelector((state: RootState) => state.viewMode);
  return (
    <div className="outerContainer">
      <div className="footer">
        <div>
          <div className={!darkMode ? 'icons' : 'iconsDark'}>
            <a target="_blank" href="https://github.com/Joshowens16">
              <GitHubIcon sx={!darkMode ? { color: 'black' } : { color: 'white' }} />
            </a>
            <a target="_blank" href="mailto: joshowens16@gmail.com">
              <EmailIcon sx={!darkMode ? { color: 'black' } : { color: 'white' }} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/joshowens97/">
              <LinkedInIcon sx={!darkMode ? { color: 'black' } : { color: 'white' }} />
            </a>
          </div>
        </div>
        <div className={!darkMode ? 'footerInfoLight' : 'footerInfoDark'}>
          <p>© 2023 • Josh Owens. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
