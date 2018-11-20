import React, { Component } from "react"; 
import "../App.scss";
import { defaultState } from "../Constants.js";
import GroceryList from "./GroceryList.js";
import ShoppingList from "./ShoppingList.js";

class GroceryContainer extends Component {
    state = defaultState;

    addItemToBasket = (name, quantity) => {
        // create a new object with key-value pairs for the name and quantity for the item
        const newItem = {
            name,
            quantity
        }

        // add the new object to the array of existing items in state
        this.setState({
            basket: [...this.state.basket, newItem]
        })
    }

    removeItem = deleteItem => {
        // find the index of the cart item in the basket array from state
        let itemIndex = this.state.basket.findIndex(item => item.name === deleteItem.name);

        // retrieve the item from state (not the copy passed up from <BasketDetail />)
        let basketItem = this.state.basket[itemIndex];

        // create a copy of the basket array inside state
        const currentState = this.state.basket.slice();

        // check what the quantity of the item inside the basket is 
        // if there is only one quantity of the item left, remove the item object completely from state
        // if there is more than one quantity of the item left, decrement the value of the quantity key inside 
        // the item object and replace it in state
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