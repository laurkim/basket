import React from "react";
import ItemDetail from "./ItemDetail.js";
import "../App.scss";

const GroceryList = props => {
    const mappedItems = props.items.map(item => <ItemDetail key={item} item={item} addItem={props.addItem} />)
    return (
        <div id="grocery-list">
            <h1 id="list-header">Shop Today's Deals</h1>
            {mappedItems}
        </div>    
    )
}

export default GroceryList;