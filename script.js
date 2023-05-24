// DOM elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = document.getElementById('productList');

// Sample product data (replace with your own data)
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Function to display products
function displayProducts() {
  productList.innerHTML = '';

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
    `;
    productList.appendChild(productItem);
  });
}

// Event listener for search button click
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  
  // Perform search functionality here
  
  // For now, let's just display all products
  displayProducts();
});

// Initial display of products
displayProducts();
