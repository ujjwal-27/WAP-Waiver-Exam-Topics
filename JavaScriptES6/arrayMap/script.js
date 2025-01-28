let colors = ['white', 'green', 'red'];

// Using regular function 
// colors.map(function (color) {
//     return '<li>' + color + '</li>';
// })

// Using arrow function on callback function. Basically, ''arrow function'' is always preferred on 'callback functions'.
colors.map(color => `<li> ${color} </li>`);

console.log(colors);


