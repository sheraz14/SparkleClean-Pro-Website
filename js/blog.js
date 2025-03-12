document.addEventListener('DOMContentLoaded', function() {
    // Featured Posts Slider
    const slider = document.querySelector('.featured-slider');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let slideIndex = 0;

    function showSlide(index) {
        const slides = slider.querySelectorAll('.featured-post');
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'grid';
    }

    prevBtn.addEventListener('click', () => {
        const slides = slider.querySelectorAll('.featured-post');
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        const slides = slider.querySelectorAll('.featured-post');
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    });

    // Initialize first slide
    showSlide(0);

    // Search Functionality
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchForm.querySelector('input').value;
        // Add your search logic here
        console.log('Searching for:', searchTerm);
    });
}); 