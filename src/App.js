import "./css/style.css";
import Profile from "./Profile";
import { BrowserRouter} from "react-router-dom";

export default function App() {

    return (
      <div className="App">
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </div>
    );
  }

