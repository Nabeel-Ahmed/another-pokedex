import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

// Styles
import "./App.css"

// Components
import Header from "./Components/Theme/Header/Header"

//Pages
import Homepage from "./Pages/Homepage/Homepage"
import Pokemon from "./Pages/Pokemon/Pokemon"

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
