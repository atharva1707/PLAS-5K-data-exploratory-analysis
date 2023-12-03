import Home from './components/about/Home'
import Experience from './components/resume/Experience';
import Projects from './components/resume/Projects';
import Resources from './components/resume/Resources';
import Skills from './components/resume/Skills';

import { resumeData } from './resume/resumeData';

import './css/skills.css'
import './css/card.css'
import './css/toggleButton.css'
import './css/about.css'
import './css/cardHeading.css'

function App() {

  return (
    <div className="App">
      <Home socialsData={resumeData.socials} />
      <Experience experienceData={{}} />
      <Projects projectData={resumeData.projects} />
      <Skills skillData={resumeData.skills} />
      <Resources resourceData={resumeData.resources} />
    </div>
  );
}

export default App;
