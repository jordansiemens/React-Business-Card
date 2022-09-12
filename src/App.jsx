import Image from "./components/Image.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="container-card">
        <Image />
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
