'use strict';

// function language(languageName) {
//     return `Using ${languageName} as programming language.`;
// }
// console.log(language('java'));

/**
 * While implementing an 'arrow function', remove the keyword 'function'.
 * Define a constant. The constant name acts as the function name.
 * Then, use parenthesis for defining function's parameter. If there is no parameter, just use an empty parenthesis.
 * Use a fat arrow '=>'
 * Use curly braces to start function scope. 
 * If the function is returned in one line, no need of curly braces. Also, no need to use 'return' keyword in this case.
 * 
 * @param {String} languageName Name of programming language
 * @returns {String}
 */
const language = (languageName) => `Using ${languageName} as programming language.`;
console.log(language('java'));


const square = (number) => number * number;
console.log(square(7));



const athletes = [
    { name: 'Ujjwal', isActive: true },
    { name: 'Khabib', isActive: false },
    { name: 'Dustin', isActive: true },
];

// const activeAthletes = athletes.filter(function (athlete) {
//     return athlete.isActive;
// })

const activeAthletes = athletes.filter(athlete => athlete.isActive); // Using arrow function in filter method
console.log(activeAthletes); // returning active athletes
