// DOM элементүүд бэлэн болсны дараа ажиллах функц
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Get all project images
    const projectImages = document.querySelectorAll('.project-image img');

    // Add click event to all project images
    projectImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Close modal when clicking (X) button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
}); 