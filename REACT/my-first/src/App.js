// import logo from "./logo.svg";
import "./App.css";
import Firstcompo from "./Firstcompo";
import Secondcompo from "./Secondcompo";
import Module from "./Module";
import StyledCompo from "./StyledCompo";

function App() {
  return (
    <div className="app-js">
      <h1>React running..</h1>
      <Firstcompo />
      <Secondcompo />
      <Module />
      <StyledCompo />
    </div>
  );
}

export default App;
