import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";
import GroceryList from "./GroceryList.js";
import ShoppingList from "./ShoppingList.js";

class GroceryContainer extends Component {
    state = defaultState;

    addItemToBasket = (item, quantity) => {
        if (this.state.basket[item]) {
            this.setState({
                basket: {
                    ...this.state.basket, 
                    item: this.state.basket[item] += quantity
                }
            })
        } else {
            this.setState({
                basket: {
                    ...this.state.basket,
                   [item]: quantity
                }
            })
        }
    }

    render() {
        return (
            <div id="grocery-container">
                <GroceryList items={this.state.items} addItem={this.addItemToBasket} />
                <ShoppingList basket={this.state.basket} />
            </div>
        )
    }
}

export default GroceryContainer;