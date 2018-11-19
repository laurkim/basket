import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";

class ListContainer extends Component {
    state = defaultState; 

    render() {
        console.log("state is", this.state)
        return (
            <div>
                <h1>hi</h1>
                <p>+++</p>
            </div>
        )
    }
}

export default ListContainer;