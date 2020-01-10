import React, {Component} from 'react';
import CoffeeAppStore from '../stores/CoffeeAppStore';

class Order extends Component {

    state = {
        cartItems: CoffeeAppStore.getCartItems()
    };

    componentDidMount() {
        CoffeeAppStore.on("itemAdded", this.UpdateCart);
    }

    componentWillUnmount() {
        CoffeeAppStore.removeListener("itemAdded", this.UpdateCart);
    }

    UpdateCart = () => {
        this.setState({'cartItems': CoffeeAppStore.getCartItems()})
    };

    render() {
        return (
            <div className="col-sm-4">
                <div className="card mt-4">
                    <h5 className="card-header">Order Description</h5>
                    <div className="card-body pt-0">
                        {
                            this.state.cartItems.length ?
                                <table className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Cost</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.cartItems.map(cartItem => (
                                            <tr key={cartItem.id}>
                                                <td>{cartItem.name}</td>
                                                <td>{cartItem.quantity}</td>
                                                <td>{cartItem.cost}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            :
                                <p className="mx-2 my-4">No items in cart</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Order;