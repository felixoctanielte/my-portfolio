import "./index.css";
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";
import ExperienceMain from "./components/ExperienceSection/ExperienceMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import ContactMeMain from "./components/ContactMeSection/ContactMeMain";
import FooterMain from "./components/Footer/FooterMain";


function App() {
  return  (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectMain />
      <ContactMeMain />
      <HelperSection />
      <FooterMain />
    </main>
  );
};
export default App;
