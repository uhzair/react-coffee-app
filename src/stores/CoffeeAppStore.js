import dispatcher from "../dispatcher";
import {EventEmitter} from "events";
import * as CoffeeAppActions from "../actions/CoffeeAppActions";
import latImg from "../imgs/lat.jpg";
import capImg from "../imgs/cap.jpg";
import fwImg from "../imgs/fw.jpg";

class CoffeeAppStore extends EventEmitter {

    constructor() {
        super();
        this.coffeeTypes = [
            {id: 1, name: 'Latte', price: 30, img: latImg},
            {id: 2, name: 'Cappuccino', price: 50, img: capImg},
            {id: 3, name: 'Flat White', price: 40, img: fwImg}
        ];
        this.currentCoffee = 0;
        this.cartItems = [];
        dispatcher.register(this.handleActions.bind(this));
    }

    handleActions(action) {
        switch (action.type) {
            case CoffeeAppActions.COFFEE_APP_ACTIONS.ON_NEXT: {
                if (this.currentCoffee < this.coffeeTypes.length - 1) {
                    this.currentCoffee++;
                    this.emit("nextLoaded");
                }
                break;
            }
            case CoffeeAppActions.COFFEE_APP_ACTIONS.ON_PREV: {
                if (this.currentCoffee > 0) {
                    this.currentCoffee--;
                    this.emit("prevLoaded");
                }
                break;
            }
            case CoffeeAppActions.COFFEE_APP_ACTIONS.ADD_TO_CART: {
                let cItem = this.cartItems.find(ci => ci.name === action.value.name);
                if (cItem) {
                    let index = this.cartItems.indexOf(cItem);
                    this.cartItems[index].cost += action.value.price;
                    this.cartItems[index].quantity += 1;
                } else {
                    this.cartItems.push({
                        id: this.cartItems.length,
                        name: action.value.name,
                        quantity: 1,
                        cost: action.value.price
                    });
                }
                this.emit("itemAdded");
                break;
            }
            default: {
            }
        }
    }

    getCurrCoffee() {
        return this.coffeeTypes[this.currentCoffee];
    }

    getCartItems(){
        return this.cartItems;
    }
}

export default new CoffeeAppStore();