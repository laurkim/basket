import React, { Component } from "react";
import ReactModal from "react-modal";
import "../App.scss";
ReactModal.setAppElement('#base');

class ItemDetail extends Component {
    state = {
        displayModal: false,
        quantity: 0
    }

    displayBuyingModal = () => {
        this.setState({ 
            displayModal: true
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
                    contentLabel="Add Item"
                    className="item-modal">
                    <form id="form">
                        <input type="number" placeholder="Quantity" onChange={this.handleChange} value={this.state.quantity} />
                        <button onClick={this.addItemToCart}>Add to Cart</button>
                    </form>
                </ReactModal>
            </div>
        )
    }
}

export default ItemDetail;




