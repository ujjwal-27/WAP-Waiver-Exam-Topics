const shoppingCart = (function () {
    let cart = [];

    const addItems = function (productName, price) {
        cart.push({ productName, price });
        console.log(`${productName} added.`);
    }

    const listItems = function () {
        console.log(cart);

    }

    return { addItems, listItems };
})();

