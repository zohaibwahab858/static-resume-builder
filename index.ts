document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
    const skills = document.getElementById('skills') as HTMLElement;
  
    // Set initial display style if not set
    if (skills.style.display === '') {
        skills.style.display = 'none';
    }
  
    toggleButton.addEventListener('click', () => {
        skills.style.display = (skills.style.display === 'none' || skills.style.display === '') ? 'block' : 'none';
    });
  });