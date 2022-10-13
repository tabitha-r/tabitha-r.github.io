export function randomDelay(selectors: string[]) {
    selectors.forEach((selector) => {
        let delay = Math.random() * 10;
    
        let element: HTMLElement | null = document.querySelector(selector);
    
        if (element !== null) {
            element.style.animationDuration = delay + 's';
        };
    });
};