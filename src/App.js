import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.scss"; 
import Header from "./components/Header.js";
import GroceryContainer from "./components/GroceryContainer.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <GroceryContainer />
            </div>
        )
    }
}

export default hot(module)(App);