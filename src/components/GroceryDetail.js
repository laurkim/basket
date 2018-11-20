import React, { Component, Fragment } from "react";
import ReactModal from "react-modal";
import "../App.scss";
ReactModal.setAppElement('#base');

class GroceryDetail extends Component {
    state = {
        displayModal: false,
        quantity: 0,
        inBasket: false
    }

    displayBuyingModal = () => {
        this.setState({ 
            displayModal: true
        })
    }

    hideBuyingModal = () => {
        this.setState({
            displayModal: false
        })
    }

    handleChange = event => {
        let quantity = parseInt(event.target.value)
        this.setState({
            quantity
        })
    }

    addItemToCart = event => {
        event.preventDefault()
        this.props.addItem(this.props.item, this.state.quantity)
        this.setState({
            displayModal: false,
            inBasket: true
        })
    }

    addItemModal = () => {
        return (
            <Fragment>
                <button onClick={this.displayBuyingModal}>Pick Quantity</button>
                <ReactModal
                    isOpen={this.state.displayModal}
                    contentLabel="Add Item"
                    className="item-modal">
                    <form id="form">
                        <input type="number" placeholder="Quantity" onChange={this.handleChange} value={this.state.quantity} />
                        <button id="add-item" onClick={this.addItemToCart}>Add Item</button>
                        <button id="hide-modal" onClick={this.hideBuyingModal}>Go Back</button>
                    </form>
                </ReactModal>
            </Fragment>
        )
    }

    itemAddedMessage = () => {
        return this.props.basket[this.props.item] ? <button disabled>Item in Cart</button> : <button onClick={this.displayBuyingModal}>Pick Quantity</button>
    }

    render() {
        return (
            <div id="item-detail">
                <h3>{this.props.item}</h3>
                { this.state.inBasket ? this.itemAddedMessage() : this.addItemModal() }
            </div>
        )
    }
}

export default GroceryDetail;




