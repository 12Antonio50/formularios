import "./css/style.css";
import Profile from "./Profile";
import { HashRouter } from "react-router-dom";

export default function App() {
    const ocultar = () => {
      document.getElementById('opcion1').style.display = 'none';
    };
    return (
      <div className="App">
      <HashRouter>
        <Profile />
      </HashRouter>
    </div>
    );
  }

