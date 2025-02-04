/**
 * What is closure?
 * - A function defined inside of another function.
 * - An inner function has access to the variables and scope of the  outer function.
 * - Enables implementation of private variable, and allows state maintenance. 
 * - The implementation of state maintenance is shown in example 2
 */

/**
 * EXAMPLE 1:
 * Immediately invoking inner function.
 * Since the inner function is invoked immediately and not returned or stored, it doesn't maintain state. 
 * Meaning, everytime 'createCounter()' is invoked, variable 'count' resets to 0. 
 */
const createCounter = function () {
    let count = 0;

    const increment = function () {
        count++;
        console.log(`Counter increased to ${count}`);
    }

    increment();
}

createCounter();
createCounter();
createCounter();








