function viewCert(image: HTMLImageElement, src: string, alt: string) {
    const show = () => {
        document.querySelector('#large-cert')!.innerHTML = `<img class="large-cert-view" src="${src}" alt="${alt}" />`;
    
        document.querySelector<HTMLElement>('.certificate-view')?.classList.remove('closed');
        document.querySelector<HTMLElement>('.certificate-view')?.classList.add('open');
    };

    image.addEventListener('click', () => show());
}

export function closeCert(button: HTMLButtonElement) {

    const close = () => {
        document.querySelector<HTMLElement>('.certificate-view')?.classList.remove('open');
        document.querySelector<HTMLElement>('.certificate-view')?.classList.add('closed');
    }

    button.addEventListener('click', () => close());
}

export function certViewSetup() {
    const certs = [
        {id: '#show-html-cert', src: '2021-11-14_HTML', alt: 'HTML Certificate'},
        {id: '#show-css-cert', src: '2022-02-07_Intermediate-CSS', alt: 'CSS Certificate'},
        {id: '#show-js-cert', src: '2022-01-08_Intermediate-JS', alt: 'JavaScript Certificate'},
        {id: '#show-ts-cert', src: '2022-02-27_TypeScript', alt: 'TypeScript Certificate'},
        {id: '#show-sass-cert', src: '2022-02-05_Sass', alt: 'Sass Certificate'},
        {id: '#show-uiux-cert', src: '2022-06-28_UI-UX-Design', alt: 'Ui/UX Design Certificate'},
        {id: '#show-colour-cert', src: '2022-01-21_Colour-Design', alt: 'Colour Design Certificate'},
        {id: '#show-nav-cert', src: '2022-02-07_Navigation-Design', alt: 'Navigation Design Certificate'},
        {id: '#show-responsive-cert', src: '2022-02-07_Responsive-Design', alt: 'Responsive Design Certificate'},
        {id: '#show-cssinjs-cert', src: '2022-02-04_CSS-in-JS', alt: 'CSS-in-JS Certificate'},
        {id: '#show-react-cert', src: '2022-06-19_Advanced-React', alt: 'React Certificate'},
        {id: '#show-redux-cert', src: '2022-01-21_Redux', alt: 'Redux Certificate'},
        {id: '#show-sql-cert', src: '2022-10-12_SQL', alt: 'SQL Certificate'},
        {id: '#show-node-cert', src: '2022-03-08_NodeJS', alt: 'NodeJS Certificate'},
        {id: '#show-express-cert', src: '2022-10-12_Express', alt: 'Express Certificate'},
        {id: '#show-php-cert', src: '2022-02-10_PHP', alt: 'PHP Certificate'},
        {id: '#show-cmd-cert', src: '2022-02-10_Command-Line', alt: 'Command Line Certificate'},
        {id: '#show-git-cert', src: '2021-11-16_Git', alt: 'Git Version Control Certificate'},
        {id: '#show-unittest-cert', src: '2022-02-07_JS-Unit-Testing', alt: 'JavaScript Unit Testing Certificate'},
        {id: '#show-debug-cert', src: '2022-02-07_JS-Debugging', alt: 'JavaScript Debugging Certificate'},
        {id: '#show-degree-cert', src: 'degree', alt: 'Acting Degree'},
        {id: '#show-fullstack-cert', src: '2022-09-27_Full-Stack-Engineer', alt: 'Full-Stack Engineer Certificate'},
        {id: '#show-frontend-cert', src: '2022-05-25_Front-End-Engineer', alt: 'Front-End Engineer Certificate'},
        {id: '#show-digitalmarketing-cert', src: 'digital-marketing', alt: 'Digital Marketing Certificate'},

    ]

    certs.forEach((cert) => {
        viewCert(document.querySelector<HTMLImageElement>(cert.id)!, `/certificates/${cert.src}_Tabitha-Riley.jpg`, cert.alt);
    })
    

}