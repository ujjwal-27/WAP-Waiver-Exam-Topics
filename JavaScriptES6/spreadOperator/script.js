/**
 * SPREAD OPERATOR '...'
 * - The main purpose of spread operator is to join two or more arrays or objects into a single one.
 * - Another purpose is to clone an array or object.
 */


/**
 * ------ FOR ARRAY ------------
 */
let first = [1, 2, 3];
let second = [4, 5, 6];
let third = [7, 8, 9]

/**
 * One way of combining arrays is using 'concat()' method.
 * But, if we want to add elements in between arrays, using this approach would not be convenient.
 * Also, combining multiple arrays would result to using 'concat()' method repeatedly.
 * This is when, spread operator comes in handy.
 */
// let combined = first.concat(second).concat(third);
// console.log(combined);


/**
 * Spread operator is represented by three dots '...'
 * As shown below, spread operator is used before variable name.
 * Using this approach, we can also add extra elements in between.
 */
let combinedArray = [...first, 77, ...second, 27, ...third];
console.log(combinedArray);






