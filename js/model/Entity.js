//import { vec2 } from "gl-matrix";

class Entity {

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     */
    constructor(x, y) {
        this.pos = vec2.fromValues(x, y);
    }

    getPos(){
        return this.pos;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime){
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(modelViewMatrix) {
        // Draw your stuff
        
        
    }
}