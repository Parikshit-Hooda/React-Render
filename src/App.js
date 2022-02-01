import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
// import UseReducer from "./components/UseReducer/UseReducer";
// import UseState from "./components/UseState/UseState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Render tutorials</h1>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      <ArrayUseState />
    </div>
  );
}
