// Initialize the cart by fetching it from localStorage or setting it as an empty array if it doesn't exist
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// On page load, update the cart icon and check the user's login status
window.onload = function () {
  updateCartIcon();
  checkLoginStatus(); // Check if the user is logged in and update the UI accordingly
};

// Dynamically load all games into the HTML when the page loads
function loadGames() {
  const productList = document.getElementById('product-list'); // Get the product list container
  if (productList) {
    productList.innerHTML = ''; // Clear any existing content in the container

    // Loop through each game in the games array
    games.forEach(game => {
      // Create an HTML structure for each game (a game card)
      const gameCard = `
        <div class="col-md-4 mb-4 game-card">
          <div class="card">
            <a href="game.html?id=${game.id}"> <!-- Link to the game details page using the game ID -->
              <img src="${game.imgSrc}" class="card-img-top game-image" alt="${game.name} Cover">
            </a>
            <div class="card-body">
              <h5 class="card-title">${game.name}</h5>
              <p class="card-text">Price: $${game.price.toFixed(2)}</p>
              <!-- Add to Cart button that triggers addToCart() -->
              <button class="btn btn-dark mt-3" onclick="addToCart(${game.price}, '${game.name}')">Add to Cart</button>
              <!-- If the user is logged in, show the Add to Wishlist button -->
              ${isLoggedIn() ? `<button class="btn btn-warning mt-3" onclick="addToWishlist('${game.name}')">Add to Wishlist</button>` : ''}
            </div>
          </div>
        </div>
      `;
      // Append the newly created game card to the product list
      productList.innerHTML += gameCard;
    });
  }
}

// Function to add a game to the cart
function addToCart(price, name) {
  // Check if the game is already in the cart
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    // If the game is already in the cart, increase the quantity
    existingItem.quantity += 1;
  } else {
    // If it's not in the cart, add it as a new item
    cart.push({ name, price, quantity: 1 });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`); // Alert the user that the item was added
  updateCartIcon(); // Update the cart icon to reflect the new number of items
}

// Update the cart icon with the number of items in the cart
function updateCartIcon() {
  // Fetch the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCountElement = document.getElementById('cart-count'); // Get the cart count element in the UI
  if (cartCountElement) {
    cartCountElement.textContent = cartCount; // Update the cart count badge
  }
}

// Display the cart items in a modal
function viewCart() {
  const cartContent = document.getElementById('cart-content'); // Get the cart content container
  if (cartContent) {
    cartContent.innerHTML = ''; // Clear any existing content in the cart modal

    // Check if the cart is empty
    if (cart.length === 0) {
      cartContent.innerHTML = '<p>Your cart is empty.</p>'; // Show a message if no items in the cart
    } else {
      let totalPrice = 0; // Initialize total price

      // Loop through each item in the cart
      cart.forEach((item, index) => {
        // Check if the item has a price (for safety)
        if (item.price !== undefined) {
          totalPrice += item.price * item.quantity; // Calculate the total price

          // Display each cart item with the option to remove it
          cartContent.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div>
                <strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}
              </div>
              <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            </div>
          `;
        } else {
          console.error(`Price is missing for item: ${item.name}`);
        }
      });

      // Display the total price in the cart modal
      cartContent.innerHTML += `
        <hr>
        <div class="d-flex justify-content-between align-items-center">
          <strong>Total Price:</strong>
          <strong>$${totalPrice.toFixed(2)}</strong>
        </div>
      `;
    }

    // Show the cart modal using Bootstrap's modal functionality
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
  }
}

// Remove an item from the cart based on its index
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item from the cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
  updateCartIcon(); // Update the cart icon
  viewCart(); // Refresh the cart modal
  const modalBackdrop = document.querySelector('.modal-backdrop'); // Get the modal backdrop
  if (modalBackdrop) {
    modalBackdrop.remove(); // Remove the modal backdrop if it exists
  }
}

// Flags to prevent multiple clicks during checkout
let isProcessingCheckout = false; // Prevents multiple checkout clicks
let isModalClickable = true; // Manages modal clickability post-checkout

// Function to handle the checkout process
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty.'); // If the cart is empty, show an alert
    return;
  }

  if (isProcessingCheckout) return; // Prevent multiple checkout clicks
  isProcessingCheckout = true; // Lock checkout button during process

  // Calculate the total price of the cart
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Total Price: $${total.toFixed(2)}\nThank you for your purchase!`); // Show total price in an alert

  // Clear the cart after checkout
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart)); // Save the empty cart to localStorage
  updateCartIcon(); // Refresh the cart icon

  // Refresh the cart modal content to show an empty cart
  viewCart();

  // Hide the cart modal using Bootstrap's modal instance
  const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
  if (cartModal) {
    cartModal.hide(); // Close the cart modal
  }

  // Delay enabling clicks after checkout for smoother transitions
  setTimeout(() => {
    const modalBackdrop = document.querySelector('.modal-backdrop'); // Get the modal backdrop
    if (modalBackdrop) {
      modalBackdrop.remove(); // Remove the modal backdrop if it still exists
    }

    // Reset flags to allow clicks again
    isProcessingCheckout = false;
    isModalClickable = true;
  }, 1000); // Timeout for the modal transition
}

// Simulate a basic login functionality
function login() {
  const username = prompt("Enter your username:"); // Prompt the user for their username
  if (username) {
    localStorage.setItem('username', username); // Save the username to localStorage
    checkLoginStatus(); // Check the login status and update the UI
  }
}

// Logout function to remove the user's login and wishlist data
function logout() {
  localStorage.removeItem('username'); // Remove the username from localStorage
  localStorage.removeItem('wishlist'); // Optionally clear the wishlist on logout
  checkLoginStatus(); // Update the UI to reflect the logged-out state
}

// Check the user's login status and update the login container UI
function checkLoginStatus() {
  const username = localStorage.getItem('username'); // Get the username from localStorage
  const loginContainer = document.getElementById('login-container'); // Get the login container

  if (username) {
    // If the user is logged in, show the username, logout, and wishlist buttons
    loginContainer.innerHTML = `
      <span>Welcome, ${username}!</span>
      <button class="btn btn-outline-light ms-2" onclick="logout()">Logout</button>
      <button class="btn btn-outline-light ms-2" onclick="viewWishlist()">View Wishlist</button>
    `;
  } else {
    // If the user is not logged in, show the login button
    loginContainer.innerHTML = `
      <button id="login-btn" class="btn btn-outline-light" onclick="login()">Login</button>
    `;
  }

  // Reload the games to ensure the "Add to Wishlist" button visibility is updated
  loadGames();
}

// Check if the user is logged in by checking if a username is stored in localStorage
function isLoggedIn() {
  return localStorage.getItem('username') !== null; // Returns true if a username exists, false otherwise
}

// Add a game to the wishlist
function addToWishlist(gameName) {

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Get the wishlist from localStorage
  if (!wishlist.includes(gameName)) {
    wishlist.push(gameName); // Add the game to the wishlist if it's not already there
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Save the updated wishlist
    alert(`${gameName} has been added to your wishlist!`); // Alert the user
  } else {
    alert(`${gameName} is already in your wishlist!`); // If the game is already in the wishlist, alert the user
  }
}

// View the user's wishlist in an alert
function viewWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Get the wishlist from localStorage
  if (wishlist.length === 0) {
    alert('Your wishlist is empty.'); // Alert if the wishlist is empty
  } else {
    alert('Your Wishlist:\n' + wishlist.join('\n')); // Display the wishlist items in an alert
  }
}

// Filter games based of category
function filterByCategory(category) {
  // Get the product list element where the game cards will be displayed
  const productList = document.getElementById('product-list');

  // Clear the existing game cards from the product list
  productList.innerHTML = '';

  // Determine which games to filter based on the selected category
  const filteredGames = category === 'All'
    ? games // If category is 'All', show all games
    : games.filter(game => game.category === category); // Otherwise, filter by selected category

  // Iterate over the filtered games and create HTML for each game card
  filteredGames.forEach(game => {
    const gameCard = `
      <div class="col-md-4 mb-4 game-card">
        <div class="card">
          <a href="game.html?id=${game.id}"> <!-- Link to the game's details page -->
            <img src="${game.imgSrc}" class="card-img-top game-image" alt="${game.name} Cover"> <!-- Game image -->
          </a>
          <div class="card-body">
            <h5 class="card-title">${game.name}</h5> <!-- Game title -->
            <p class="card-text">Price: $${game.price.toFixed(2)}</p> <!-- Game price formatted to two decimal places -->
            <button class="btn btn-dark mt-3" onclick="addToCart(${game.price}, '${game.name}')">Add to Cart</button> <!-- Button to add game to cart -->
            ${isLoggedIn() ? `<button class="btn btn-warning mt-3" onclick="addToWishlist('${game.name}')">Add to Wishlist</button>` : ''} <!-- Conditional button for adding to wishlist -->
          </div>
        </div>
      </div>
    `;

    // Append the generated game card HTML to the product list
    productList.innerHTML += gameCard;
  });
}

// Filter games based on the search bar input
function filterGames() {
  const searchText = document.getElementById('search-bar').value.toLowerCase(); // Get the search text
  const productList = document.getElementById('product-list'); // Get the product list container
  productList.innerHTML = ''; // Clear the current game cards

  // Filter the games array based on the search input
  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchText));

  // Display only the filtered games
  if (filteredGames.length > 0) {
    filteredGames.forEach(game => {
      const gameCard = `
        <div class="col-md-4 mb-4 game-card">
          <div class="card">
            <a href="game.html?id=${game.id}">
              <img src="${game.imgSrc}" class="card-img-top img-fluid" alt="${game.name} Cover" style="height: 500px; object-fit: cover;">
            </a>
            <div class="card-body">
              <h5 class="card-title">${game.name}</h5>
              <p class="card-text">Price: $${game.price.toFixed(2)}</p>
              <button class="btn btn-dark mt-3" onclick="addToCart(${game.price}, '${game.name}')">Add to Cart</button>
              ${isLoggedIn() ? `<button class="btn btn-warning mt-3" onclick="addToWishlist('${game.name}')">Add to Wishlist</button>` : ''}
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += gameCard; // Append the filtered game cards
    });
  } else {
    productList.innerHTML = '<p>No games match your search.</p>'; // Show a message if no games match the search
  }
}

// Helper function to get the game ID from the URL query parameters
function getGameIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search); // Parse the query parameters
  return urlParams.get('id'); // Return the value of the 'id' parameter
}

// Load the details of a specific game based on the game ID in the URL
function loadGameDetails() {
  const gameId = getGameIdFromUrl(); // Get the game ID from the URL
  const game = games.find(game => game.id == gameId); // Find the game with the matching ID

  // Populate the game details on the page
  document.getElementById('game-name').innerText = game.name;
  document.getElementById('game-title').innerText = game.name;
  document.getElementById('game-price').innerText = game.price;
  document.getElementById('game-description').innerText = game.description;
  document.getElementById('game-developer').innerText = game.developer;
  document.getElementById('game-release').innerText = game.releaseDate;

  const mainImage = document.getElementById('game-image'); // Get the game image element
  if (mainImage) {
    mainImage.src = game.imgSrc; // Set the game's image source
  }

  // Load and display the game reviews
  // Load and display the game reviews
const reviewsDiv = document.getElementById('game-reviews');
if (reviewsDiv && game.reviews) {
    reviewsDiv.innerHTML = ''; // Clear any existing reviews
    game.reviews.forEach(review => {
        const reviewElement = document.createElement('div'); // Create a new review container
        reviewElement.className = 'review'; // Add the review class for styling

        // Create user name element
        const userElement = document.createElement('span');
        userElement.className = 'review-user'; // Class for user name
        userElement.textContent = review.user + ': '; // Set user name text

        // Create review text element
        const textElement = document.createElement('span');
        textElement.className = 'review-text'; // Class for review text
        textElement.textContent = review.text; // Set review text

        // Append user and text elements to review element
        reviewElement.appendChild(userElement);
        reviewElement.appendChild(textElement);

        // Append the review element to the reviews container
        reviewsDiv.appendChild(reviewElement);
    });
}


  const addToCartButton = document.getElementById('add-to-cart-btn'); // Get the Add to Cart button
  if (addToCartButton) {
    addToCartButton.onclick = addToCartGame; // Assign the Add to Cart function to the button
  }

  updateCartIcon(); // Update the cart icon
}


// Add the selected game to the cart from the game details page
function addToCartGame() {
  const quantity = parseInt(document.getElementById('quantity').value); // Get the quantity from the input field
  const gameId = getGameIdFromUrl(); // Get the game ID from the URL
  const game = games.find(game => game.id == gameId); // Find the game with the matching ID

  if (game) {
    const existingItem = cart.find(item => item.name === game.name); // Check if the game is already in the cart
    if (existingItem) {
      existingItem.quantity += quantity; // Increase the quantity if the game is already in the cart
    } else {
      cart.push({ name: game.name, price: game.price, quantity }); // Add the game to the cart if it's not already there
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
    updateCartIcon(); // Update the cart icon
    alert(`${game.name} added to cart!`); // Alert the user
  } else {
    alert('Game not found'); // Alert if the game is not found
  }
}

// Event listener that triggers when the page is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
  updateCartIcon(); // Updates the cart icon with the correct item count
  loadGameDetails(); // Loads the details of the selected game (based on the game ID from the URL)

  // Adds functionality to the "Add to Cart" button
  const addToCartButton = document.getElementById('add-to-cart-btn');
  if (addToCartButton) {
    addToCartButton.onclick = addToCartGame; // Calls 'addToCartGame()' when the button is clicked
  } else {
    console.error("Add to Cart button not found!"); // Logs an error if the button is missing
  }
});

// Event listener to trigger search filtering as the user types in the search bar
document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('search-bar'); // Get the search bar element
  if (searchBar) {
    searchBar.addEventListener('input', filterGames); // Call filterGames() on input
  }
});

function closeAd(adId) {
  const ad = document.getElementById(adId);
  ad.style.display = 'none'; // Hide the ad
  // Make the ad reappear after 5 seconds
  setTimeout(() => {
    ad.style.display = 'block';
  }, 1000000); // 5 seconds delay
}