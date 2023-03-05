import "./css/style.css";
import Profile from "./Profile";
import { BrowserRouter} from "react-router-dom";

export default function App() {
    const ocultar = () => {
      document.getElementById('opcion1').style.display = 'none';
    };
    return (
      <div className="App">
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </div>
    );
  }

