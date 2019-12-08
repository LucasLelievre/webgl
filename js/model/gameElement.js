class GameElement {

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     */
    constructor(x, y, type) {
        this.posX = x;
        this.posY = y;
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
    draw(deltaTime) {
        // Draw your stuff
    }
}