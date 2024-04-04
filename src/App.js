// import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path="/" element={<Home />}></Route>
       </Routes>
      </header>
    </div>
  );
}

export default App;
