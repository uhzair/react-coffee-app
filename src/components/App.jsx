import React, {Component} from 'react';
import NavBar from './navbar.jsx';
import Coffee from './coffee.jsx';
import Order from './order.jsx';
import latImg from "../imgs/lat.jpg";
import capImg from "../imgs/cap.jpg";
import fwImg from "../imgs/fw.jpg";

class App extends Component {

    state = {
        coffeeTypes: [
            {id: 1, name: 'Latte', price: 30, img: latImg},
            {id: 2, name: 'Cappuccino', price: 50, img: capImg},
            {id: 3, name: 'Flat White', price: 40, img: fwImg}
        ],
        currentCoffee: 0,
        cartItems: []
    };

    handleNext = () => {
        let currentCoffee = this.state.currentCoffee;
        currentCoffee += currentCoffee < this.state.coffeeTypes.length - 1 ? 1 : 0;
        console.log('this');
        if(currentCoffee !== this.state.currentCoffee)
            this.setState({currentCoffee: currentCoffee});
    };

    handlePrev = () => {
        let currentCoffee = this.state.currentCoffee;
        currentCoffee -= currentCoffee > 0 ? 1 : 0;
        this.setState({currentCoffee: currentCoffee});
    };

    handleAddToCart = currCoffee => {
        let cartItems = [...this.state.cartItems];
        let cItem = cartItems.find(ci => ci.name === currCoffee.name);
        if(cItem){
            let index = cartItems.indexOf(cItem);
            cartItems[index].cost += currCoffee.price;
            cartItems[index].quantity += 1;
        } else {
            cartItems.push({
                id: cartItems.length,
                name: currCoffee.name,
                quantity: 1,
                cost: currCoffee.price
            });
        }
        this.setState({cartItems: cartItems});
    };

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <Coffee onPrev={this.handlePrev} onNext={this.handleNext} onAddToCart={this.handleAddToCart}
                                currCoffee={this.state.coffeeTypes[this.state.currentCoffee]}/>
                        <Order cartItems={this.state.cartItems}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;