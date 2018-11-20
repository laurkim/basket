import React from "react";
import GroceryDetail from "./GroceryDetail.js";
import "../App.scss";

const GroceryList = props => {
    const mappedItems = props.items.map(item => <GroceryDetail key={item} item={item} addItem={props.addItem} basket={props.basket} />)
    return (
        <div id="grocery-list">
            <h1 id="list-header">Shop Today's Deals</h1>
            {mappedItems}
        </div>    
    )
}

export default GroceryList;