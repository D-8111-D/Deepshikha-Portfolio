import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Home,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SpaceParticlesCanvas,
  SpaceSceneCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
          <SpaceParticlesCanvas />
          <SpaceSceneCanvas />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}

          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
