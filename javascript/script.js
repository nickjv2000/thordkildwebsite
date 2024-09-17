document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header2 a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
