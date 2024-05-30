// Sample product data (replace with your actual product data)
const products = [
    { name: 'Organic Honey', description: 'Pure, golden honey harvested from our sustainably managed beehives.', image: 'images/organic_honey.jpg' },
    { name: 'Heirloom Tomatoes', description: 'Juicy, flavorful tomatoes grown with care from heritage seeds.', image: 'images/heirloom_tomatoes.jpg' },
    { name: 'Herbal Tea Blend', description: 'A soothing blend of handpicked herbs and botanicals, perfect for relaxation.', image: 'images/herbal_tea_blend.jpg' },
    { name: 'Artisanal Cheese', description: 'Creamy, artisan-crafted cheese made with fresh milk from our grass-fed cows.', image: 'images/Artisanal Cheese.jpg' },
    { name: 'Organic Strawberries', description: 'Delicious and sweet organic strawberries picked at peak ripeness.', image: 'images/organic_strawberries.jpg' },
    { name: 'Free-Range Eggs', description: 'Farm-fresh free-range eggs from happy, healthy chickens.', image: 'images/free_range_eggs.jpg' },
    { name: 'Handcrafted Soap', description: 'Luxurious handcrafted soap made with natural ingredients and essential oils.', image: 'images/Handcrafted Soap.jpg' },
    { name: 'Freshly Baked Bread', description: 'Warm, crusty bread made daily using traditional baking methods.', image: 'images/bread.jpg' }
];

// Function to dynamically generate product items
function generateProductItems() {
    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        // Create product item
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Product image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productItem.appendChild(productImage);

        // Product name
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productItem.appendChild(productName);

        // Product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productItem.appendChild(productDescription);

        // Buy button
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy Now';
        buyButton.classList.add('buy-btn');
        buyButton.addEventListener('click', () => {
            // Handle buy button click event, e.g., redirect to a purchase page
            alert(`You have purchased ${product.name}`);
        });
        productItem.appendChild(buyButton);

        // Append product item to product grid
        productGrid.appendChild(productItem);
    });
}

// Call the function to generate product items
generateProductItems();

function showModal(product) {
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-description').textContent = product.description;
    modal.style.display = 'block';
  }
  
  // Function to hide the modal
  function hideModal() {
    modal.style.display = 'none'; // Set display to none to hide the modal
  }
  
  // Event listeners for closing the modal
  closeModalButton.addEventListener('click', hideModal);
  
  // You can also add a click event listener to the modal overlay (optional)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) { // Check if the click is on the overlay
      hideModal();
    }
  });
  
  createProductItems();