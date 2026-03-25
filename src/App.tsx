// ============================================================
// App is the ROOT component — it's the one that holds
// all the others. Think of it as the "page" itself.
// We'll add each new component here as we build them.
// ============================================================

import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
