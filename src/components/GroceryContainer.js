import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";
import GroceryList from "./GroceryList.js";
import ShoppingList from "./ShoppingList.js";

class GroceryContainer extends Component {
    state = defaultState;

    render() {
        const itemNames = Object.keys(this.state.items);
        return (
            <div id="grocery-container">
                <GroceryList items={this.state.items} itemNames={itemNames} />
                <ShoppingList />
            </div>
        )
    }
}

export default GroceryContainer;