import React from "react";
import "../App.scss";

const ItemDetail = props => {
    console.log("props are", props)
    return (
        <h3>{props.item}</h3>
    )
}

export default ItemDetail;