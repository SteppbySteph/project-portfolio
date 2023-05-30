import Header from "./pages/Header";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import FeaturedProjects from "./pages/FeaturedProjects";
//import OtherProjects from ".pages/OtherProjects";
import Thoughts from "./pages/Thoughts";
import Skills from "./pages/Skills";
import More from "./pages/More";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Thoughts />
      <Skills />
      <More />
      <Contact />
    </div>
  );
}

export default App;
