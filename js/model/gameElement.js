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
     * Update the element
     */
    update(deltaTime){
        // Update the element
    }

    /**
     * Draw the element
     */
    draw(deltaTime) {
        // Draw your stuff
    }
}