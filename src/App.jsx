import "./App.css";
import {
  Contact,
  Features,
  Footer,
  Hero,
  Navbar,
  Projects,
  Testimonials,
  WhatIDo,
  WhoIWorkWith,
} from "./Components";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhatIDo />
      <Features />
      <WhoIWorkWith />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
