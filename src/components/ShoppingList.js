import React from "react";
import BasketDetail from "./BasketDetail.js";
import "../App.scss";

const ShoppingList = props => {
    const itemNames = Object.keys(props.basket)
    const basketDetails = itemNames.map(item => <BasketDetail key={item} item={item} basket={props.basket} removeItem={props.removeItem} />)

    return (
        <div id="basket-list">
            <h1 id="basket-header">Your Basket</h1>
            {basketDetails}
        </div>
    )
}

export default ShoppingList;