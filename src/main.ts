import './assets/sass/index.scss';
import logo from './assets/images/logo.svg';

const img = new Image();
img.src = logo;
document.getElementById('tr-logo-container')?.appendChild(img);