document.addEventListener("scroll", function() {
    const content = document.querySelector(".content");
    const contentPosition = content.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        content.classList.add("visible");
    }
});

// script.js
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;
    const ratingValue = document.getElementById('rating').value;

    const reviewsContainer = document.querySelector('.reviews-container');
    const newReview = document.createElement('div');
    newReview.className = 'review-card';
    newReview.innerHTML = `
        <div class="review-header">
            <h3 class="reviewer-name">${reviewerName}</h3>
            <div class="rating">${'⭐'.repeat(ratingValue)}</div>
        </div>
        <p class="review-text">${reviewText}</p>
        <span class="review-date">Reviewed on: ${new Date().toLocaleDateString()}</span>
    `;

    reviewsContainer.prepend(newReview); // Add the new review to the top
    document.getElementById('reviewForm').reset(); // Reset the form
});
