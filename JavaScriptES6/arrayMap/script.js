let colors = ['white', 'green', 'red'];

// Using regular function 
// let mappedColors = colors.map(function (color) {
//     return '<li>' + color + '</li>';
// })

// Using arrow function on callback function. Basically, ''arrow function'' is always preferred on 'callback functions'.
// Map function returns a new arrya, so it must be stored in a variable.
let mappedColors = colors.map(color => `<li> ${color} </li>`);

console.log(mappedColors);


