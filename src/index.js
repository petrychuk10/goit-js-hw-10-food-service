import './styles.css';

import ItemsTamplate from './menuList.hbs';
import menu from './menu.json';

const markup = ItemsTamplate(menu);
import { checkLocalStorage } from './theme.js';

const jsMenu = document.querySelector('.js-menu');
jsMenu.insertAdjacentHTML('beforeend', markup);

checkLocalStorage();
