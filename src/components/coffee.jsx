import React from 'react';

const Coffee = (props) => {
    const { onPrev, onNext, onAddToCart, currCoffee} = props;
    return (
        <div className="col-sm-8 mt-4">
            <div className="row mt-4">
                <div className="col-sm-4 my-auto text-right px-0">
                    <button className="btn btn-info btn-sm" onClick={() => onPrev()}>Previous</button>
                </div>
                <div className="col-sm-4 text-center">
                    <img className="img img-fluid" src={currCoffee.img}
                         alt="coffee"/>
                    <div className="mt-4">
                        <p className="p-2 bg-primary text-white">
                            Price Rs. {currCoffee.price}
                        </p>
                        <button className="btn btn-success btn-sm" onClick={() => onAddToCart(currCoffee)}>Add to Cart</button>
                    </div>
                </div>
                <div className="col-sm-4 my-auto text-left px-0">
                    <button className="btn btn-info btn-sm" onClick={() => onNext()}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;