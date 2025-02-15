const renderUserList = function () {
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

    const ul = document.createElement('ul');

    // users.forEach(user => {
    //     const li = document.createElement('li');

    //     li.textContent = `${user.name} - ${user.age}`;

    //     li.setAttribute('key', user.id);

    //     ul.appendChild(li);
    // });

    const userLists = users.map(user => {
        const li = document.createElement('li');

        li.textContent = user.name;

        return li;
    });

    userLists.forEach(list => ul.appendChild(list));


    document.body.appendChild(ul);
}

renderUserList();