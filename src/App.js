import React, { useState } from 'react';
import Bar from './components/Bar';
import Projects from './components/Projects';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import ProjectsFolder from './components/ProjectsFolder';
import AboutMe from './components/AboutMe';
import AboutMeFolder from './components/AboutMeFolder';
import Skills from './components/Skills';
import SkillsFolder from './components/SkillsFolder';
import GitHub from './components/GitHub';
import LinkedIn from './components/LinkedIn';
import Email from './components/Email';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color:#008080;
    max-height:100%;
    overflow: hidden;
  }
  ${styleReset}
`;
function App() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [allOpen, setAllOpen] = useState([]);
  const manageAddOpen = (e) => setAllOpen([...allOpen, e]);
  const manageRemoveOpen = (e) => {
    setAllOpen(allOpen.filter((list) => list !== e));
  };
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '70vh',
            width: '300px',
          }}
        >
          <Projects clickFunction={setProjectsOpen} addToOpen={manageAddOpen} />
          <ProjectsFolder
            clickFunction={setProjectsOpen}
            isOpen={projectsOpen}
            removeFromOpen={manageRemoveOpen}
          />
          <AboutMe clickFunction={setAboutMeOpen} addToOpen={manageAddOpen} />
          <AboutMeFolder
            clickFunction={setAboutMeOpen}
            isOpen={aboutMeOpen}
            removeFromOpen={manageRemoveOpen}
          />
          <Bar
            allOpen={allOpen}
            Projects={setProjectsOpen}
            AboutMe={setAboutMeOpen}
            Skills={setSkillsOpen}
          />
          <Skills clickFunction={setSkillsOpen} addToOpen={manageAddOpen} />
          <SkillsFolder
            clickFunction={setSkillsOpen}
            isOpen={skillsOpen}
            removeFromOpen={manageRemoveOpen}
          />
          <GitHub />
          <LinkedIn />
          <Email clickFunction={setContactFormOpen} addToOpen={manageAddOpen} />
          <ContactForm
            clickFunction={setContactFormOpen}
            isOpen={contactFormOpen}
            removeFromOpen={manageRemoveOpen}
          />
          <Resume />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
