const removeFromShoppingCart = element.querySelector('#shopping-cart');

removeFromShoppingCart.addEventListener('click', removeFromCart);

function removeFromCart(e) {
    // console.log(e.target.parentElement.parentElement);
    if (e.target.classList.contains('.remove')) {
        e.target.parentElement.parentElement.remove(); 
    }
}