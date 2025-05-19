document.addEventListener('DOMContentLoaded', function() {
    // Extract token from URL
    const path = window.location.pathname;
    const pathParts = path.split('/');
    
    // The token should be the last part of the URL when using /reset/{token} format
    if (pathParts.length > 0) {
        const token = pathParts[pathParts.length - 1];
        
        // Check if the token looks valid (not empty and not just "reset")
        if (token && token !== '' && token !== 'reset') {
            console.log('Reset token:', token);
        } else if (pathParts.length > 1 && pathParts[pathParts.length - 2] === 'reset') {
            // Handle case where URL ends with a trailing slash
            const token = pathParts[pathParts.length - 2];
            console.log('Reset token:', token);
        }
    }

    // Form submission handling
    const resetForm = document.getElementById('reset-form');
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
});
