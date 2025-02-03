
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



