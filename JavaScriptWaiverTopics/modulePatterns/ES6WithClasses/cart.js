export class ShoppingCart {
    #cart = [];  // private instance variable

    addCart(productName, price) {
        this.#cart.push({ productName, price });
        console.log(`${productName} added.`);
    }

    listItems() {
        console.log(this.#cart);
    }
}
