// ... existing code ...
function validateForm(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Full Name validation - only letters and spaces
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(fullName)) {
        alert('Please enter a valid name (letters only)');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Phone validation - 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    
    // Message validation - minimum 10 characters
    if (message.trim().length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }
    
    // If all validations pass, the form can be submitted
    document.getElementById('contactForm').submit();
    return true;
}
// ... existing code ...