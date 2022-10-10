export function detectColour() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("body")?.classList.add('theme__dark');
        document.getElementById("body")?.classList.remove('theme__light');
    }
}

export function toggleColour(button: HTMLButtonElement) {
    const toggle = () => {
        if (document.getElementById("body")?.classList.contains('theme__light')) {
            document.getElementById("body")?.classList.add('theme__dark');
            document.getElementById("body")?.classList.remove('theme__light');
            button.innerHTML = `<i class="fa-duotone fa-brightness"></i>`;
        } else {
            document.getElementById("body")?.classList.add('theme__light');
            document.getElementById("body")?.classList.remove('theme__dark');
            button.innerHTML = `<i class="fa-duotone fa-moon-stars"></i>`;
        }
    }

    button.addEventListener('click', () => toggle())
}