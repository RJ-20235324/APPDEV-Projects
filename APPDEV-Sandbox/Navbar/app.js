const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    console.log(links.classList); // For debugging purposes
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }
});
