import "./App.css";
import { Login } from "./components/Login";
import Profile from "./components/Profile";
import ChangeColour from "./components/ChangeColour";

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <ChangeColour />
    </div>
  );
}

export default App;
