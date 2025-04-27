import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <StarsCanvas />
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
