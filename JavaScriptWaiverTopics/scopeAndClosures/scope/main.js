/**
 * Two types of scopes: Local and Global
 * Local: Defined within the function
 * Global: Defined outside the function
 */

let age = 27; // global scope

const person1 = function () {
    let name = 'Ujjwal'; // local scope
    console.log(`${name} is ${age} years young.`);
}

person1();