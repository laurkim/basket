import React from "react";
import ReactDOM from "react-dom";
import "./App.scss"; 
import Header from "./components/header.js";

const App = () => {
    return (
        <div>
            <Header />
            <h1 id="app">Basket Rendered</h1>
        </div>
    )
}

export default App;