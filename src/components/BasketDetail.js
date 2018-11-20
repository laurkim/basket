import React from "react";
import "../App.scss";

const BasketDetail = props => {
    const { item } = props;

    const handleClick = () => {
        props.removeItem(props.item)
    }

    return (
        <div id="basket-detail">
            <h3>{item.quantity} {item.name}</h3>
            <button onClick={handleClick}>Delete Item</button>
        </div>
    )
}

export default BasketDetail;