document.addEventListener('DOMContentLoaded', function() {
    // First, check if a token was stored in sessionStorage from the URL path handler
    let token = sessionStorage.getItem('resetToken');
    
    // If no token was found in sessionStorage, try to extract it from the URL
    if (!token) {
        const path = window.location.pathname;
        const pathParts = path.split('/');
        
        // The token should be the last part of the URL when using /reset/{token} format
        if (pathParts.length > 0) {
            token = pathParts[pathParts.length - 1];
            
            // Check if the token looks valid (not empty and not just "reset")
            if (!(token && token !== '' && token !== 'reset')) {
                if (pathParts.length > 1 && pathParts[pathParts.length - 2] === 'reset') {
                    // Handle case where URL ends with a trailing slash
                    token = pathParts[pathParts.length - 2];
                } else {
                    token = null;
                }
            }
        }
    }
    
    // Log the token if we found one
    if (token) {
        console.log('Reset token:', token);
    }
    
    // Add click event listener to all links in the document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a link or has a parent link
        let targetElement = event.target;
        while (targetElement && targetElement !== document) {
            if (targetElement.tagName === 'A') {
                const href = targetElement.href;
                
                // Check if it matches our target URL pattern
                if (href && href.includes('https://http-host-header-attack.onrender.com/reset/')) {
                    // Extract the token from the URL
                    const urlParts = href.split('/');
                    const token = urlParts[urlParts.length - 1];
                    
                    // Log token to console
                    if (token && token !== '') {
                        console.log('Clicked reset token:', token);
                    }
                }
                break;
            }
            targetElement = targetElement.parentElement;
        }
    });

    // Form submission handling
    const resetForm = document.getElementById('reset-form');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Here you would normally make an API call to update the password
            // using the token and new password
            alert('Password reset successfully!');
        });
    }
});
