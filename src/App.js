import React from "react";

// Styles
import "./App.css";

// Components
import Header from "./Components/Theme/Header/Header";

//Pages
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage/>
    </div>
  );
}

export default App;
