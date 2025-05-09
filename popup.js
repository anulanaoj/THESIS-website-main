document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("fullscreen-popup");
    const popupImage = document.getElementById("popup-image");
    const popupDescription = document.getElementById("popup-description");
    const prevImage = document.getElementById("prev-image");
    const nextImage = document.getElementById("next-image");
    const images = Array.from(document.querySelectorAll(".clickable"));
    let currentIndex = -1;

    // Open popup when an image is clicked
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            showImage();
        });
    });

    // Show the current image and description in the popup
    function showImage() {
        if (currentIndex >= 0 && currentIndex < images.length) {
            popup.style.display = "block";
            popupImage.src = images[currentIndex].src;
            popupDescription.textContent = images[currentIndex].alt || "No description available";
        }
    }

    // Navigate to the previous image
    prevImage.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showImage();
        }
    });

    // Navigate to the next image
    nextImage.addEventListener("click", () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage();
        }
    });

    // Close popup when clicking on the white background
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});