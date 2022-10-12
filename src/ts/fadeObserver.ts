let fadeTargets = document.querySelectorAll('.fade-in');

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    })
}, {
    root: document.querySelector('#main'),
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
});

export function fadeObserver() {
    fadeTargets.forEach((target) => {
        observer.observe(target);
    })
}