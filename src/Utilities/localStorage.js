const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = (cart) => {
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringyfied);

}

const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLS(cart);
} 

export {addToLS, getStoredCart};
