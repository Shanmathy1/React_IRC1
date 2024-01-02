import React from 'react';
import './Home.css'; 


const Navigation = () => {
  return (
    <nav>
    </nav>
  );
};

const LoginRegister = () => {
  return (
    <div className="login-register">
      <a href="App.js">REGISTER</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navigation />
      <LoginRegister />
    </div>
  );
};

export default App;
