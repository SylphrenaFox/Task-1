import { getRandomColor } from './utils.js';
 

export default function initApp() {
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';

    button.addEventListener('click', (event) => {
        const body = document.querySelector('body');
        body.style.backgroundColor = getRandomColor();
    })
    document.body.append(button);
  }


