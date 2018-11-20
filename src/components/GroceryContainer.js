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

    removeItem = item => {
        if (this.state.basket[item] === 1) {
            const currentState = {...this.state.basket}
            delete currentState[item]
            this.setState({
                basket: currentState
            }, () => console.log("if only 1", this.state))
        } else {
            this.setState({
                basket: {
                    ...this.state.basket[item], 
                    [item]: this.state.basket[item] -= 1
                }
            }, () => console.log("if more than 1", this.state))
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