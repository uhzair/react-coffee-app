import dispatcher from "../dispatcher";

export const COFFEE_APP_ACTIONS = {
    ON_NEXT: 'coffeeAppActions.OnNext',
    ON_PREV: 'coffeeAppActions.OnPrev',
    ADD_TO_CART: 'coffeeAppActions.AddToCart'
};

export function onNext() {
    dispatcher.dispatch({
        type: COFFEE_APP_ACTIONS.ON_NEXT
    })
}

export function onPrev() {
    dispatcher.dispatch({
        type: COFFEE_APP_ACTIONS.ON_PREV
    })
}

export function addToCart(coffee) {
    dispatcher.dispatch({
        type: COFFEE_APP_ACTIONS.ADD_TO_CART,
        value: coffee
    })
}
