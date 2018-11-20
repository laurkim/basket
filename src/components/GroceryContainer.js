import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";
import GroceryList from "./GroceryList.js";
import ShoppingList from "./ShoppingList.js";

class GroceryContainer extends Component {
    state = defaultState;

    addItemToBasket = (name, quantity) => {
        const newItem = {
            name,
            quantity
        }

        this.setState({
            basket: [...this.state.basket, newItem]
        })
    }

    removeItem = deleteItem => {
        let itemIndex = this.state.basket.findIndex(item => item.name === deleteItem.name);
        let basketItem = this.state.basket[itemIndex];
        const currentState = this.state.basket.slice();

        if (basketItem !== -1) {
            if (basketItem.quantity === 1) {
                currentState.splice(itemIndex, 1)
                    this.setState({
                        basket: currentState
                    })
            } else {
                basketItem.quantity -= 1
                currentState.splice(itemIndex, 1, basketItem)
                this.setState({
                    basket: currentState
                })
            }
        }
    }

    render() {
        return (
            <div id="grocery-container">
                <GroceryList items={this.state.items} addItem={this.addItemToBasket} basket={this.state.basket} />
                <ShoppingList basket={this.state.basket} removeItem={this.removeItem} />
            </div>
        )
    }
}

export default GroceryContainer;