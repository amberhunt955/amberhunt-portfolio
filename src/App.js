import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";

// Pages
import Main from "./pages/Main";
import Media from "./pages/Media";
import Blog from "./pages/Blog";

// Styling
import "./assets/global.css";
import "./components/navigation/navigation.css";
import "./pages/pages.css";
import "./components/main-sections/sections.css";
import "./components/components.css";

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
