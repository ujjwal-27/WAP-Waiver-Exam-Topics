import { ShoppingCart } from "./cart.js";

const shoppingCart = new ShoppingCart();

shoppingCart.addCart("gloves", 5000);
shoppingCart.addCart("wraps", 1000);
shoppingCart.addCart("guard", 2500);

shoppingCart.listItems();