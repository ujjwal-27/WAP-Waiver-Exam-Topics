
const filterProduct = function () {
    // List of users
    const products = [
        { id: 1, name: "Laptop", inStock: true },
        { id: 2, name: "Phone", inStock: false },
        { id: 3, name: "Tablet", inStock: true },
        { id: 4, name: "Watch", inStock: true },
        { id: 5, name: "Desktop", inStock: false }
    ];

    const filteredProduct = products.filter(product => product.inStock === true);

    console.log(filteredProduct);

    const ul = document.createElement('ul');

    const listFilteredProducts = filteredProduct.map(product => {
        const li = document.createElement('li');

        li.textContent = product.name;

        return li;
    })

    listFilteredProducts.forEach(productList => {
        ul.appendChild(productList);
    });

    document.body.appendChild(ul);
}

filterProduct();

