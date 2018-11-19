import React from "react";
import ItemDetail from "./ItemDetail.js";
import "../App.scss";

const GroceryList = props => {
    const mappedItems = props.itemNames.map(name => <ItemDetail key={name} item={name} addItem={props.addItem} />)
    return (
        <div id="grocery-list">
            {mappedItems}
        </div>    
    )
}

export default GroceryList;