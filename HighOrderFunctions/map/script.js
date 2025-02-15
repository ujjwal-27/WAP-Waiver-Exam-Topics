/**
 * Here, we can see the usage of map() function and DOM manipulation for list users in web page.
 */
const renderUserList = function () {
    // List of users
    const users = [
        {
            id: 1,
            name: 'Ujjwal',
            age: 27
        },
        {
            id: 2,
            name: 'Jason',
            age: 13
        },
        {
            id: 3,
            name: 'Jyoti',
            age: 38
        },
    ];

    const ul = document.createElement('ul'); // creating <ul> element

    // users.forEach(user => {
    //     const li = document.createElement('li');

    //     li.textContent = `${user.name} - ${user.age}`;

    //     li.setAttribute('key', user.id);

    //     ul.appendChild(li);
    // });


    /**
     * Map function always returns a new array. Here, it is returning array of list <li> items.
     * [
     *   <li>Ujjwal</li>,
     *   <li>Jason</li>,
     *   <li>Jyoti</li>
     * ]
     * 
     * The array of objects: 'users' is iterated using map method()
     * On each iteration, <li> list element is created with user's name and age as textContent
     * Map() method always returns statement.
     * 
     */
    const userLists = users.map(user => {
        const li = document.createElement('li');

        li.textContent = `${user.name} - ${user.age} `;

        return li;
    });

    // The array of <li> list elements are appended as child element of <ul> element
    userLists.forEach(list => ul.appendChild(list));

    // Then, <ul> element is appended as child element of <body> element
    document.body.appendChild(ul);
}

renderUserList(); // return function