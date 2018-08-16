import {createCanvas} from './createCanvas';
import {SpriteAnimation} from '../movingSprite/movingSprite';
import {Spaceship} from '../movingSprite/spaceshipTest';

createCanvas();

/**
 * basic animations
 */
/*
const sprite = new SpriteAnimation();

setInterval(() => {
   sprite.drawSprite();
}, 100);
*/

const ship = new Spaceship();

ship.drawShip();
