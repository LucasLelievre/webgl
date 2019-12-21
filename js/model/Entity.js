//import { vec2 } from "gl-matrix";

class Entity {

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     */
    constructor(x, y) {
        this.pos = vec2.create();
        vec2.set(this.pos, x, y);
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
    draw(width, height) {
        // Draw your stuff
        /*
        - get position
        - glLoadIdentity // reset model-view matrix
        - get aspectRatio (width / height)
        - translate to position
            glTranslate(aspectRatio * (positionX - (0.5 * width)) / (0.5 * width),
                                        (positionY - (0.5 * height)) / (0.5 * height))
        - Draw
            glBegin(GL_TRIANGLE_FAN)
            set color
            glVertex
            glEnd
        */
    }
}