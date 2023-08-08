// You can add any JavaScript enhancements here
// Example: Scroll to top button
window.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
