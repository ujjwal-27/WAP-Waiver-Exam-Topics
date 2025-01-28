let address = {
    street: 'Baluwatar',
    city: 'Kathmandu',
    country: 'Nepal'
};

/**
 * Say we need to store each property of 'address' object in a separate variable.
 * One way would be as shown below. 
 * But this approach is very repititive, as it calls address object each time while assigning value of properties in separate variable.
 */
// let street = address.street;
// let city = address.city;
// let country = address.country;



/**
 * To overcome this issue, we can use a convenient approach called 'Object Destructuring'.
 * Here, the variables' name are defined same as the property name.
 */
let { street, city, country } = address;
console.log(street);

/**
 * If we want different names for variable, we can use the concept of 'alias'
 */
let { street: st, city: ct, country: ctry } = address;
console.log(ct);

