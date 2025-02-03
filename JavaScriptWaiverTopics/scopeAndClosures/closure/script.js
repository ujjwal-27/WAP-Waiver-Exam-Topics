/**
 * What is closure?
 * - A function defined inside of another function.
 * - An inner function has access to the variables and scope of the  outer function.
 * - Enables implementation of private variable, and allows state maintenance. 
 * - The implementation of state maintenance is shown in example 2
 */

/**
 * EXAMPLE 1:
 * Immediately invoking closure (inner function)
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

/**
 * EXAMPLE 2:
 * Returning closure (inner function)
 */
// const createCounter = function () {
//     let count = 0;

//     const increment = function () {
//         count++;
//         console.log(`Counter increased to ${count}`);
//     }

//     return increment;
// }

// // const counter = createCounter();
// // counter.increment();
// // counter.increment();las

// console.log(createCounter);



