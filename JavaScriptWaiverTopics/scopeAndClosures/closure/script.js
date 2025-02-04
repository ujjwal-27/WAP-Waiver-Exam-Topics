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
// const createCounter = function () {
//     let count = 0;

//     const increment = function () {
//         count++;
//         console.log(`Counter increased to ${count}`);
//     }

//     increment();
// }

// createCounter();
// createCounter();
// createCounter();



/**
 * EXAMPLE 2:
 * Returning inner function
 * Here, the inner function 'increment' is returned, and createCounter() is stored in counter 'variable' creating a closure which results in maintaining the state of variable 'count'.
 * It is a common practice of storing outer variable in a variable before invoking it, when the inner function is returned (not immediately invoked).
 */
const createCounter = function () {
    let count = 0;

    const increment = function () {
        count++;
        console.log(`Counter increased to ${count}`);
    }

    return increment;
}

const counter = createCounter(); // Store the closure. The 'counter' variable holds a reference to 'increment' function. This maintains state of 'count' variable.
counter();
counter();


// This is another way of calling this function. 
// Here it invokes, createCounter() function first, and then increment() function.
// Since the outer function is not stored in a reference variable, this approach does not maintain state.
createCounter()();
createCounter()();




