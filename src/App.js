import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss"; 
import Header from "./components/Header.js";
import ListContainer from "./components/ListContainer.js";

const App = () => {
    return (
        <div>
            <Header />
            <ListContainer />
        </div>
    )
}

export default hot(module)(App);