let currentSlide = 0;
const projectsPerPage = 4; // Number of projects to show at a time
const projectList = document.querySelector(".project-list");
const totalProjects = projectList.children.length;
const totalSlides = Math.ceil(totalProjects / projectsPerPage);

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    projectList.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function openProjectDetailsModal(title, image, description) {
    document.getElementById("projectTitle").textContent = title;
    document.getElementById("projectImage").src = image;
    document.getElementById("projectDescription").textContent = description;
    document.getElementById("projectDetailsModal").style.display = "block";
}

function closeProjectDetailsModal() {
    document.getElementById("projectDetailsModal").style.display = "none";
}

function addToCart() {
    alert("Project added to cart");
    closeProjectDetailsModal();
}

let cartCount = 0;  // Starting with 0 items in the cart
let currentQuantity = 0;  // Starting quantity of the product in the details page

function increaseQuantity() {
    currentQuantity++;
    document.getElementById("quantityValue").innerText = currentQuantity;  // Update quantity display
}

function decreaseQuantity() {
    if (currentQuantity > 0) {
        currentQuantity--;
        document.getElementById("quantityValue").innerText = currentQuantity;  // Update quantity display
    }
}

function addToCart() {
    // Update the cart count in the header based on the quantity selected
    cartCount += currentQuantity;
    document.getElementById("cartCount").innerText = `[${cartCount}]`;  // Update the cart count in the header

    // Close the details page after adding to cart
    closeDetailsPage();
}

function closeDetailsPage() {
    document.getElementById("detailsPage").style.display = "none";  // Hide the details page
}

function toggleDetailsPage() {
    let detailsPage = document.getElementById("detailsPage");

    // Toggle visibility of the details page
    if (detailsPage.style.display === "none" || detailsPage.style.display === "") {
        detailsPage.style.display = "block";  // Show the details page
    } else {
        detailsPage.style.display = "none";  // Hide the details page
    }
}


function filterProjects() {
    console.log("Filtering projects...");
    // Get the value of the search input
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    // Get all project cards
    const projectCards = document.querySelectorAll(".project-card");

    // Loop through each project card and check if it matches the search query
    projectCards.forEach(card => {
        // Get the project title text
        const projectTitle = card.querySelector("h3").textContent.toLowerCase();
        
        // Check if the project title includes the search query
        if (projectTitle.includes(searchValue)) {
            // Show the project card if it matches
            card.style.display = "block";
        } else {
            // Hide the project card if it doesn't match
            card.style.display = "none";
        }
    });
}



