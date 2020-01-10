import React, {Component} from 'react';
import CoffeeAppStore from '../stores/CoffeeAppStore';
import * as CoffeeAppActions from "../actions/CoffeeAppActions";

class Coffee extends Component {

    state = {
        'currCoffee': CoffeeAppStore.getCurrCoffee()
    };

    componentDidMount() {
        CoffeeAppStore.on("nextLoaded", this.updateCurrCoffee);
        CoffeeAppStore.on("prevLoaded", this.updateCurrCoffee);
    }

    componentWillUnmount() {
        CoffeeAppStore.removeListener("nextLoaded", this.updateCurrCoffee);
        CoffeeAppStore.removeListener("prevLoaded", this.updateCurrCoffee);
    }

    updateCurrCoffee = () => {
        this.setState({'currCoffee': CoffeeAppStore.getCurrCoffee()})
    };

    onNextClick() {
        CoffeeAppActions.onNext()
    };

    onPrevClick() {
        CoffeeAppActions.onPrev()
    };

    onCartClick = (currCoffee) => {
        CoffeeAppActions.addToCart(currCoffee)
    };

    render() {
        return (
            <div className="col-sm-8 mt-4">
                <div className="row mt-4">
                    <div className="col-sm-4 my-auto text-right px-0">
                        <button className="btn btn-info btn-sm" onClick={this.onPrevClick} disabled={this.state.currCoffee.id === 1}>Previous</button>
                    </div>
                    <div className="col-sm-4 text-center">
                        <img className="img img-fluid" src={this.state.currCoffee.img}
                             alt="coffee"/>
                        <div className="mt-4">
                            <p className="p-2 bg-primary text-white">
                                Price Rs. {this.state.currCoffee.price}
                            </p>
                            <button className="btn btn-success btn-sm" onClick={() => this.onCartClick(this.state.currCoffee)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-sm-4 my-auto text-left px-0">
                        <button className="btn btn-info btn-sm" onClick={this.onNextClick} disabled={this.state.currCoffee.id === 3}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coffee;