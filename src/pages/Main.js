import Welcome from "../components/main-sections/Welcome";
import Projects from "../components/main-sections/Projects";
import About from "../components/main-sections/About";
import Contact from "../components/main-sections/Contact";

function Main() {
    return (
        <div>
            <Welcome />

            <Projects />

            <About />

            <Contact />
        </div>
    )
}

export default Main;