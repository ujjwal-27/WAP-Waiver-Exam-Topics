/**
 * Prototype of Array, Object and Function
 */
console.log(Array.prototype);
console.log(Object.prototype);
console.log(Function.prototype);

/**
 * Array - Prototypal Inheritance
 * 
 * Test on browser:
 * sports.__proto__
 * sports.__proto__.__proto__
 * sports.__proto__.__proto__.__proto__
 */

let sports = ["boxing", "swimming"];

/**
 * Object - Prototypal Inheritance
 * 
 * Test on browser:
 * profile.__proto__
 * profile.__proto__.__proto__
 */
let profile = {
    name: 'Ujjwal',
    age: 27
}

/**
 * Function - Prototypal Inheritance 
 * 
 * Test on browser:
 * update.__proto__
 * update.__proto__.__proto__
 * update.__proto__.__proto__.__proto__
 */
function update() {
    console.log('Updated');
}





