document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-header').addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const open = item.classList.toggle('is-open');
        content.classList.toggle('hidden', !open);
        icon.classList.toggle('rotate-180', open);
    });
});