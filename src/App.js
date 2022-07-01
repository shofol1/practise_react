import logo from "./logo.svg";
import "./App.css";
import ClassCom from "./components/ClassCom";
import FunctionCom from "./components/FunctionCom";
import CheckCom from "./components/CheckCom";
import FormCom from "./components/FormCom";
import FormFunc from "./components/FormFunc";

function App() {
  return (
    <div className="App">
      {/* <ClassCom shofol="shofol" shanto="shanto" /> */}
      {/* <FunctionCom shanto="shanto" shofol="shofol" /> */}
      {/* <CheckCom /> */}
      <FormCom />
      {/* <FormFunc /> */}
    </div>
  );
}

export default App;
