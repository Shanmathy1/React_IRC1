// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      <Routes>
      <Route path = '/' element={<Nav/>}/>
      </Routes>
    </div>
  );
}
export default App;
