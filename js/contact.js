document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validation
        if (!/^[A-Za-z ]+$/.test(fullName.trim())) {
            alert('Please enter a valid name (letters only)');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
        
        if (message.trim().length < 10) {
            alert('Message must be at least 10 characters');
            return;
        }
        
        // If validation passes, submit the form
        form.submit();
    });

    // FAQ Functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });

    // Sticky CTA
    const stickyCta = document.querySelector('.sticky-cta');
    const footer = document.querySelector('.main-footer');

    window.addEventListener('scroll', () => {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        stickyCta.classList.toggle('show', footerTop > windowHeight);
    });
});

// Updated validation function
function validateForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = {
        name: form.elements.fullName,
        email: form.elements.email,
        phone: form.elements.phone,
        message: form.elements.message
    };

    let isValid = true;

    // Name validation
    if (!/^[A-Za-z ]{2,}$/.test(inputs.name.value.trim())) {
        showError(inputs.name, 'Please enter a valid name (letters only)');
        isValid = false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email.value)) {
        showError(inputs.email, 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation
    if (!/^\d{10}$/.test(inputs.phone.value)) {
        showError(inputs.phone, 'Please enter a 10-digit phone number');
        isValid = false;
    }

    // Message validation
    if (inputs.message.value.trim().length < 10) {
        showError(inputs.message, 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        form.classList.add('submitting');
        setTimeout(() => {
            form.submit();
        }, 1500);
    }
}

// Enhanced error handling
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message') || createErrorElement(formGroup);
    errorElement.textContent = message;
    input.setAttribute('aria-invalid', 'true');
}

function createErrorElement(formGroup) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    formGroup.appendChild(errorElement);
    return errorElement;
} 