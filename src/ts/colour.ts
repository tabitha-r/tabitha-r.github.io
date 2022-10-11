export function detectColour() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById("body")?.classList.add('theme__dark');
        document.getElementById("body")?.classList.remove('theme__light');
        document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.remove('fa-moon-stars');
        document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.add('fa-brightness');
    }
}

export function toggleColour(button: HTMLButtonElement) {

    const toggle = () => {
        if (document.getElementById("body")?.classList.contains('theme__light')) {
            document.getElementById("body")?.classList.add('theme__dark');
            document.getElementById("body")?.classList.remove('theme__light');
            document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.remove('fa-moon-stars');
            document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.add('fa-brightness');
        } else {
            document.getElementById("body")?.classList.add('theme__light');
            document.getElementById("body")?.classList.remove('theme__dark');
            document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.remove('fa-brightness');
            document.querySelector<HTMLElement>("#toggle-scheme-icon")?.classList.add('fa-moon-stars');
        }
    }

    button.addEventListener('click', () => toggle())
}