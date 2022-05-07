import { temp } from './temp.js'
import './styles/main.scss'
import ScrollMagic from 'scrollmagic';

var controller = new ScrollMagic.Controller();

//create a scene
new ScrollMagic.Scene({
    duration: 500,
    offset :50
})
.setPin("body")
.addTo(controller);
document.querySelector('h1').textContent = temp('How are you doing!');