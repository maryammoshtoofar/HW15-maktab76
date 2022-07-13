
import "./App.css";
import HeaderClassComponent from "./components/CounterClass/CounterClass";
import HeaderFunctionComponent from "./components/CounterFunction/CounterFunction";

function App() {
  return (
    <div className="App">
      <HeaderClassComponent />
      <HeaderFunctionComponent />
    </div>
  );
}

export default App;
