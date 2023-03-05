import "./css/style.css";
import Profile from "./Profile";
import { HashRouter} from "react-router-dom";

export default function App() {

    return (
      <div className="App">
      <HashRouter>
        <Profile />
      </HashRouter>
    </div>
    );
  }

