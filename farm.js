function search() {
    var searchTerm = document.getElementById("searchInput").value;
    // Implement your search logic here
    alert("Searching for: " + searchTerm);
}

// Sample product data (replace with your actual product data)
const products = [
    { name: 'Organic Honey', description: 'Pure, golden honey harvested from our sustainably managed beehives.', image: 'images/organic_honey.jpg' },
    { name: 'Heirloom Tomatoes', description: 'Juicy, flavorful tomatoes grown with care from heritage seeds.', image: 'images/heirloom_tomatoes.jpg' },
    { name: 'Herbal Tea Blend', description: 'A soothing blend of handpicked herbs and botanicals, perfect for relaxation.', image: 'images/herbal_tea_blend.jpg' },
    { name: 'Artisanal Cheese', description: 'Creamy, artisan-crafted cheese made with fresh milk from our grass-fed cows.', image: 'images/Artisanal Cheese.jpg' }
    // Add more products as needed
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

        // Append product item to product grid
        productGrid.appendChild(productItem);
    });
}

// Call the function to generate product items
generateProductItems();

// Updated farm tour data
const tours = [
    { name: 'Farm Walk Tour', description: 'Experience a guided walk through our lush fields and learn about our sustainable farming practices.', image: 'images/farm_walk.jpg' },
    { name: 'Animal Encounter', description: 'Get up close and personal with our friendly farm animals and learn about animal care.', image: 'images/cow.jpg' },
    { name: 'Seed-to-Table Workshop', description: 'Join us for a hands-on workshop where you can harvest fresh produce and learn to prepare farm-to-table meals.', image: 'images/heirloom_tomatoes.jpg' },
    { name: 'Farm Machinery Tour', description: 'Explore our state-of-the-art farm machinery and learn about modern farming techniques.', image: 'images/farm_machinery.jpg' } // Added new tour item
];

// Updated blog post data
const blogPosts = [
    { title: 'The Importance of Organic Farming', content: 'Organic farming prioritizes sustainable practices, biodiversity, and environmental health. It avoids synthetic pesticides and fertilizers, relying instead on natural methods like crop.', image: 'images/organic_food.jpg' },
    { title: 'Farm-to-Table: A Journey of Freshness', content: 'The farm-to-table movement emphasizes the direct supply chain from local farms to consumers, promoting freshness, seasonality, and community support.', image: 'images/farm_to_table.jpg' },
    { title: 'Exploring Sustainable Agriculture Practices', content: 'Sustainable agriculture integrates environmental stewardship, economic viability, and social responsibility. Practices include soil conservation, water management, and agroforestry.', image: 'images/sustainable_agriculture.jpg' },
    { title: 'The Joy of Farming', content: 'Farming is more than just a job; it\'s a way of life. It connects us to the land, to our communities, and to the rhythms of nature. Whether we\'re planting seeds, tending crops, or caring for animals, each day on the farm brings new challenges and rewards.', image: 'images/farm_joy.jpg' },
    { title: 'Harvest Season Celebration', content: 'Join us as we celebrate the bountiful harvest season! From fresh fruits to hearty vegetables, our farm is bustling with abundance. Experience the joy of harvest festivities with music, food, and fun activities for the whole family.', image: 'images/harvest_celebration.jpg' },
    { title: 'Preserving Farm Traditions', content: 'At our farm, we cherish and uphold the rich traditions of agriculture passed down through generations. From heritage seeds to time-honored farming methods, we honor our roots while embracing innovation for a sustainable future.', image: 'images/farm_traditions.jpg' }
];



// Function to generate farm tour items
function generateTourItems() {
    const tourItemsContainer = document.querySelector('.tour-items');

    tours.forEach(tour => {
        // Create tour item
        const tourItem = document.createElement('div');
        tourItem.classList.add('tour-item');

        // Tour image
        const tourImage = document.createElement('img');
        tourImage.src = tour.image;
        tourImage.alt = tour.name;
        tourItem.appendChild(tourImage);

        // Tour name
        const tourName = document.createElement('h3');
        tourName.textContent = tour.name;
        tourItem.appendChild(tourName);

        // Tour description
        const tourDescription = document.createElement('p');
        tourDescription.textContent = tour.description;
        tourItem.appendChild(tourDescription);

        // Button
        const tourButton = document.createElement('a');
        tourButton.href = '#'; // Add your tour page link here
        tourButton.classList.add('btn');
        tourButton.textContent = 'Descover Now';
        tourItem.appendChild(tourButton);

        // Append tour item to container
        tourItemsContainer.appendChild(tourItem);
    });
}

// Function to generate blog posts
function generateBlogPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts');

    blogPosts.forEach(post => {
        // Create blog post item
        const blogPostItem = document.createElement('div');
        blogPostItem.classList.add('blog-post');

        // Blog post image
        const postImage = document.createElement('img');
        postImage.src = post.image;
        postImage.alt = post.title;
        blogPostItem.appendChild(postImage);

        // Blog post title
        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        blogPostItem.appendChild(postTitle);

        // Blog post content
        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        blogPostItem.appendChild(postContent);

        // Button
        const postButton = document.createElement('a');
        postButton.href = '#'; // Add your blog post link here
        postButton.classList.add('btn');
        postButton.textContent = 'Read More';
        blogPostItem.appendChild(postButton);

        // Append blog post item to container
        blogPostsContainer.appendChild(blogPostItem);
    });
}

// Call functions to generate tour items and blog posts
generateTourItems();
generateBlogPosts();

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop - 50 // Adjust scroll offset as needed
        });
    }
}

// Function to handle navigation click events
function handleNavigationClick(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute('href').substring(1); // Extract target section ID
    scrollToSection(targetId); // Scroll to target section
}

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', handleNavigationClick);
});

// Add event listener to footer quick links
document.querySelectorAll('footer ul li a').forEach(link => {
    link.addEventListener('click', handleNavigationClick);
});
// Function to scroll to the farm tours section
function scrollToFarmTours() {
    const farmToursSection = document.getElementById('section4');
    if (farmToursSection) {
        window.scrollTo({
            behavior: 'smooth',
            top: farmToursSection.offsetTop - 50 // Adjust scroll offset as needed
        });
    }
}

// Add event listener to "Take a Tour" button
const takeTourButton = document.querySelector('.hero-content .btn');
if (takeTourButton) {
    takeTourButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        scrollToFarmTours(); // Scroll to farm tours section
    });
}

// Add event listener to "Learn More" button
const learnMoreButtons = document.querySelectorAll('.about-us .btn');
learnMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        window.location.href = 'learn_more.html'; // Redirect to the learn more page
    });
});

const Myproducts = document.querySelectorAll('.about-us .btn');
Myproducts.forEach(button => {
   button.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'products.html'
   })
})