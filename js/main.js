document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Contact form validation and redirect (for contact.html)
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (name && !name.value.trim()) {
                if (nameError) nameError.textContent = 'Name is required';
                isValid = false;
            } else if (nameError) {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && (!email.value.trim() || !emailPattern.test(email.value))) {
                if (emailError) emailError.textContent = 'Valid email is required';
                isValid = false;
            } else if (emailError) {
                emailError.textContent = '';
            }
            
            // Service selection validation
            const service = document.getElementById('service');
            const serviceError = document.getElementById('serviceError');
            if (service && !service.value) {
                if (serviceError) serviceError.textContent = 'Please select a service';
                isValid = false;
            } else if (serviceError) {
                serviceError.textContent = '';
            }
            
            if (isValid) {
                alert('Thank you! Your request has been submitted.');
                window.location.href = 'index.html';
            }
        });
    }
    
    // Quick contact form on homepage (if exists)
    const quickContact = document.getElementById('quickContact');
    if (quickContact) {
        quickContact.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! A Cybertec expert will reach out within 24 hours.');
            quickContact.reset();
        });
    }
});