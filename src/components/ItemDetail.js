import React from "react";
import "../App.scss";

const ItemDetail = props => {
    console.log("props are", props)
    return (
        <h1>{props.item}</h1>
    )
}

export default ItemDetail;