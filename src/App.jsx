import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from './components/Projects';
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="px-10">
        <About />
        <Technologies />
        <Projects />
        <ContactMe />
      </main>
    </>
  )
}

export default App
