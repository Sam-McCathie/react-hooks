import "./App.css";
import {UseContext} from "./hooks/UseContext";
import {UseEffect} from "./hooks/UseEffect";
import {UseState} from "./hooks/UseState";

function App() {
  return (
    <div>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseContext />
    </div>
  );
}

export default App;
