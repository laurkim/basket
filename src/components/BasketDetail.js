import React from "react";
import "../App.scss";

const BasketDetail = props => {
    const handleClick = () => {
        props.removeItem(props.item)
    }

    const quantity = props.basket[props.item]

    return (
        <div id="basket-detail">
            <h3>{quantity} {props.item}</h3>
            <button onClick={handleClick}>Delete Item</button>
        </div>
    )
}

export default BasketDetail;