function downloadCV() {
    alert("Your CV is being downloaded!");
    // Add the actual download link
    window.location.href = 'resume.pdf';
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add event listener to the dark mode button
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.bottom = '20px';
    darkModeButton.style.right = '20px';
    darkModeButton.style.padding = '10px';
    darkModeButton.style.backgroundColor = '#000';
    darkModeButton.style.color = '#fff';
    darkModeButton.style.border = 'none';
    darkModeButton.style.borderRadius = '5px';
    darkModeButton.style.cursor = 'pointer';
    
    darkModeButton.addEventListener('click', toggleDarkMode);
    document.body.appendChild(darkModeButton);
});