// JavaScript file (script.js)
function showAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle About button click
    const aboutHotelButton = document.getElementById('aboutHotelButton');
    if (aboutHotelButton) {
        aboutHotelButton.addEventListener('click', showAbout);
    }

    // Handle navigation links click
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionID = this.getAttribute('href').substring(1);
            document.getElementById(sectionID).scrollIntoView({ behavior: 'smooth' });
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle menu toggle for responsive design
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '&#9776;';
    document.querySelector('header').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    });
});
