import React, { Component } from "react";
import BasketDetail from "./BasketDetail.js";
import "../App.scss";

class ShoppingList extends Component {   
    state = {
        sorted: false
    }

    quantitySort = () => {
        this.setState({
            sorted: !this.state.sorted
        })
    }

    basketDetails = () => {
        return (
            this.props.basket.map(item => <BasketDetail key={item.name} item={item} basket={this.props.basket} removeItem={this.props.removeItem} />)
        )
    }

    sortedDetails = () => {
        let currentState = this.props.basket.slice();
        let sortedBasket = currentState.sort(function(a, b) {
            return b.quantity - a.quantity;
        });

        return sortedBasket.map(item => <BasketDetail key={item.name} item={item} basket={this.props.basket} removeItem={this.props.removeItem} />)
    }

    render() {
        const sortMessage = "Sort by Quantity";
        const unsortMessage = "Sort by Order";

        return (
            <div id="basket-list">
                <h1 id="basket-header">Your Basket</h1>
                <button id="sort-button" onClick={this.quantitySort}>{ this.state.sorted ? unsortMessage : sortMessage }</button>
                { this.state.sorted ? this.sortedDetails() : this.basketDetails() }
            </div>
        )
    } 
}

export default ShoppingList;