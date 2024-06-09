const products = [
    { title: "BMW", price: 40000, count: "15" },
    { title: "Toyota", price: 20000, count: "13" },
    { title: "Ford", price: 30000, count: "20" },
    { title: "Chevrolet", price: 60000, count: "9" },
    { title: "Volkswagen", price: 30000, count: "13" },
];

const productList = document.getElementById('product-list');
const totalSummary = document.getElementById('total-summary');

let totalSum = 0;
let totalCount = 0;

products.forEach(product => {
    const productSum = product.price * product.count;
    totalSum += productSum;
    totalCount += parseInt(product.count);

    const productItem = document.createElement('div');
    productItem.innerHTML = `
        <h3>${product.title}</h3>
        <p>Цена: $${product.price}</p>
        <p>Количество: ${product.count}</p>
        <p>Сумма: $${productSum}</p>
        <hr>
    `;
    productList.appendChild(productItem);
});

const summaryItem = document.createElement('div');
summaryItem.innerHTML = `
    <h2>Итог</h2>
    <p>Общая сумма: $${totalSum}</p>
    <p>Общее количество товаров: ${totalCount}</p>
`;
totalSummary.appendChild(summaryItem);
