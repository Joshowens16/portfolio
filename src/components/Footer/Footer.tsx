import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './footer.css';
const Footer = () => {
  return (
    <div className="outerContainer">
      <div className="footer">
        <div>
          <div className="icons">
            <a target="_blank" href="https://github.com/Joshowens16">
              <GitHubIcon />
            </a>
            <a target="_blank" href="mailto: joshowens16@gmail.com">
              <EmailIcon />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/joshowens97/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="footerInfo">
          <p>© 2023 • Josh Owens. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
