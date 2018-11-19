import React, { Component } from "react";
import ReactModal from "react-modal";
import "../App.scss";
ReactModal.setAppElement('#base');

class ItemDetail extends Component {
    state = {
        displayModal: false
    }

    displayBuyingModal = () => {
        this.setState({ 
            displayModal: true
        })
    }

    addItemToCart = () => {
        this.props.addItem(this.props.item)
        this.setState({
            displayModal: false
        })
    }

    render() {
        return (
            <div id="item-detail">
                <h3>{this.props.item}</h3>
                <button onClick={this.displayBuyingModal}>Pick Quantity</button>
                <ReactModal
                    isOpen={this.state.displayModal}
                    contentLabel="Add Item">
                    <button onClick={this.addItemToCart}>Add to Cart</button>
                </ReactModal>
            </div>
        )
    }
}

export default ItemDetail;




