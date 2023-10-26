import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Doughters from "./components/Doughters";
import My from "./components/My";
import MyCopyright from "./components/MyCopyright";
import RandomImg from "./components/RandomImg";

function App(){
  return (
    <div>
    <HelloWorld />
    <My />
    <Doughters />
    <RandomImg />
    <MyCopyright />
    </div>
  )
}

export default App
