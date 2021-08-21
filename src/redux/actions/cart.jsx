export const addProductToCart = (pizzaObj) => ({
    type: 'ADD_PRODUCT_CART',
    payload: pizzaObj,
});

export const dashProductToCart = (pizzaObj) => ({
    type: 'DASH_PRODUCT_CART',
    payload: pizzaObj,
});

export const removeProductToCart = (pizzaObj) => ({
    type: 'REMOVE_PRODUCT_CART',
    payload: pizzaObj,
});