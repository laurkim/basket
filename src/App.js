import React from "react";
import ReactDOM from "react-dom";
import "./App.scss"; 
import NavBar from "./components/nav.js";

const App = () => {
    return (
        <div>
            <NavBar />
            <h1 id="app">Basket Rendered</h1>
        </div>
    )
}

export default App;