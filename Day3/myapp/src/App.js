import React from "react";
import Nav from "./Components/Nav";
import './Assests/css/nav.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      
             <body >
             <div className="navbar"> 
        <div className="background">
          {/* Your background content goes here */}
        </div>
        <p>Hello</p>
      </div>
      <img src="https://picsum.photos/id/104/300/300" className="top-left" alt="dream catcher" />
      <img src="https://picsum.photos/id/113/300/300" className="top-right" alt="tea or maybe another drink" style={{ "--c": "#ECD078" }} />
      <img src="https://picsum.photos/id/157/300/300" className="bottom-left" alt="skateboard" style={{ "--c": "#FC9D9A" }} />
      <img src="https://picsum.photos/id/212/300/300" className="bottom-right" alt="bike" style={{ "--c": "#A8DBA8" }} />
</body>
      <Footer />
      <Home />
    </>
  );
}

export default App;
