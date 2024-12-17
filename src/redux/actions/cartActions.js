export const addToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: { product, quantity },
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };
};

export const updateCartQuantity = (id, quantity) => {
    return {
        type: 'UPDATE_CART_QUANTITY',
        payload: { id, quantity },
    };
};
