import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
     <Routes>
      {/* <Route to='/about' element={<Home/>}/> */}
      <Route path='/' element={<Nav/>} />
      </Routes>
    </div>
  );
}

export default App;
