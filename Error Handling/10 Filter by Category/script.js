function filterProductsByCategory(products, category) {
    return function() {
        return products.filter(product => product.category === category);
    };
}

const allProducts = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Jeans', category: 'Clothing' },
    
];

const electronicsFilter = filterProductsByCategory(allProducts, 'Electronics');
const electronicsProducts = electronicsFilter();

console.log(electronicsProducts); 
