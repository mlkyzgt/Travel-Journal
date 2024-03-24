import Navbar from "./components/navbar";
import Main from "./components/main";
import "./page.css";

function App() {
  return (
    <div className="page">
      <div>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
