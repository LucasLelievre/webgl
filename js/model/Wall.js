class Wall extends Entity {

    /**
     * Creates a Wall
     * @param {int} x position on the X axis
     * @param {int} y position on the Y axis
     */
	constructor(x, y){
        super(x, y)
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime){
        // Update the element
        // To be honest, not much to do.
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(width, height) {
        // Draw your stuff
    }
}