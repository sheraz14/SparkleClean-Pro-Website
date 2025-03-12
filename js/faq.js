document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // FAQ Search
    const searchInput = document.getElementById('faqSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        faqItems.forEach(item => {
            const question = item.querySelector('h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            const matches = question.includes(searchTerm) || answer.includes(searchTerm);
            item.style.display = matches ? 'block' : 'none';
        });
    });

    // FAQ Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            faqItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Ask Question Button
    const askBtn = document.querySelector('.ask-question-btn');
    askBtn.addEventListener('click', () => {
        // Add your contact form or modal logic here
        alert('Contact form coming soon!');
    });

    // Add this to your existing FAQ JavaScript
    const questionForm = document.getElementById('questionForm');
    questionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(questionForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to your backend
        console.log('Question submitted:', data);
        
        // Show success message
        alert('Thank you for your question! We will get back to you soon.');
        questionForm.reset();
    });
}); 