const getStoredCart =()=>{
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        return JSON.parse(storedCart);
    }
    return [];
}

//saveto local storage

const saveToLS = (cart) =>{
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringCart); 
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveToLS(cart)
}

const removeFromLS=id=>{
    const cart = getStoredCart();
    const remainItems = cart.filter(index => index !== id)
    saveToLS(remainItems);
}
export {addToLS, getStoredCart, removeFromLS}