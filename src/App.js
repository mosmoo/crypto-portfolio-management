import Assets from "./screens/Assets.jsx"
import {Routes, Route} from "react-router-dom"
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Assets />}/>
      </Routes>
    </div>
  );
}

export default App;
