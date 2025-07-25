document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
    // Get the main content area (we'll add an ID to it in the next step)
    const mainContent = document.getElementById('main-content');

    // Loop through each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if it's an internal link and not set to open in a new tab
            if (link.href.startsWith(window.location.origin) && link.getAttribute('target') !== '_blank') {
                event.preventDefault(); // Stop the browser from navigating immediately

                const targetUrl = link.href; // Get the URL of the clicked link

                // Add the 'page-transition-out' class to the main content
                // This will trigger the CSS fadeOutDown animation
                if (mainContent) { // Check if mainContent element exists
                    mainContent.classList.add('page-transition-out');
                }

                // Wait for the animation to complete (0.5 seconds, matches CSS)
                // Then, navigate to the new page
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500); // 500 milliseconds
            }
        });
    });
});