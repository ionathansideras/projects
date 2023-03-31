import style from './style.css';
import aside from './aside.js';
import carousel from './carousel.js';
import scroll from './scroll.js';
import {addBoxShadowIfVisible} from './shadow.js';

aside();
carousel();
scroll();

window.addEventListener('scroll', addBoxShadowIfVisible);




