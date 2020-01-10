import React from 'react';

const Order = (props) => {
    const {cartItems} = props;
    return (
        <div className="col-sm-4">
            <div className="card mt-4">
                <h5 className="card-header">Order Description</h5>
                <div className="card-body pt-0">
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
                        cartItems.map(cartItem => (
                            <tr key={cartItem.id}>
                                <td>{cartItem.name}</td>
                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.cost}</td>
                            </tr>
                        ))
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Order;