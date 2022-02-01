// import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
// import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
// import { Parent } from "./components/ParentChild/Parent";
// import UseReducer from "./components/UseReducer/UseReducer";
// import UseState from "./components/UseState/UseState";
import { ChildOne } from "./components/Optimizations/ChildOne";
// import { OptParentOne } from "./components/Optimizations/OptParentOne";
import { ParentOne } from "./components/Optimizations/ParentOne";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Render tutorials</h1>
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne /> */}
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}
