let colors = ['white', 'green', 'red'];

colors.map(function (color) {
    return '<li>' + color + '</li>';
})

colors.map(color => `<li> ${color} </li>`);

console.log(colors);


