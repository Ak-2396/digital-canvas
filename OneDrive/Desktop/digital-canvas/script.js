document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    // Select all content sections in the main area
    const contentSections = document.querySelectorAll('main section');

    // Function to show a specific section and hide others
    function showSection(targetId) {
        contentSections.forEach(section => {
            if (section.id === targetId) {
                // Show the target section
                section.style.display = 'block'; // Make it visible
                setTimeout(() => {
                    section.style.opacity = '1'; // Fade it in
                }, 10); // Small delay for transition to apply
            } else {
                // Hide other sections with a fade out
                section.style.opacity = '0';
                // After fade out, set display to none to remove from layout flow
                setTimeout(() => {
                    section.style.display = 'none';
                }, 300); // Match this timeout to CSS transition duration
            }
        });
    }

    // Function to update active button styling
    function setActiveButton(clickedButton) {
        navButtons.forEach(button => {
            button.classList.remove('active'); // Remove active class from all buttons
        });
        clickedButton.classList.add('active'); // Add active class to the clicked button
    }

    // Add click event listeners to all navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target; // Get the target section ID from data-target attribute
            showSection(targetId); // Show the corresponding section
            setActiveButton(this); // Update active button styling
        });
    });

    // Initial load: show the 'about' section by default
    showSection('about');
});