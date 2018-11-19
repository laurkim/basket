import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";
import GroceryList from "./GroceryList.js";
import ShoppingList from "./ShoppingList.js";

class GroceryContainer extends Component {
    state = defaultState;

    addItemToBasket = item => {
        if (this.state.basket[item]) {
            this.setState({
                basket: {
                    ...this.state.basket, 
                    item: this.state.basket[item]++
                }
            })
        } else {
            this.setState({
                basket: {
                    ...this.state.basket,
                    item: 1
                }
            })
        }
    }

    render() {
        const itemNames = Object.keys(this.state.items);
        return (
            <div id="grocery-container">
                <GroceryList items={this.state.items} itemNames={itemNames} addItem={this.addItemToBasket} />
                <ShoppingList />
            </div>
        )
    }
}

export default GroceryContainer;