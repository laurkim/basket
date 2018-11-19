import React from "react";
import ItemDetail from "./ItemDetail.js";
import "../App.scss";

const GroceryList = props => {
    console.log("inside grocery list", props)
    const mappedItems = props.itemNames.map(item => <ItemDetail key={item.name} />)
    return (
        <div id="grocery-list">
            {mappedItems}
        </div>    
    )
}

export default GroceryList;