document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById('toggleButton');
    var skills = document.getElementById('skills');
    // Set initial display style if not set
    if (skills.style.display === '') {
        skills.style.display = 'none';
    }
    toggleButton.addEventListener('click', function () {
        skills.style.display = (skills.style.display === 'none' || skills.style.display === '') ? 'block' : 'none';
    });
});
