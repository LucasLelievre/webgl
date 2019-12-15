class Player extends Entity {

    constructor(x, y) {
        super(x, y)
        this.hp = 3;
        this.dirX = 1;
        this.dirY = 0;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime) {
        // Update the entity
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(gl) {
        // alright, lets draw some shit

        // Set the drawing position to the "identity" point, which is the center of the scene
        const modelViewMatrix = mat4.create();

        // Now move the drawing position a bit to where we want to start drawing the square
        mat4.translate(modelViewMatrix,   // destination matrix
            modelViewMatrix,                // matrix to translate
            [-0.0, 0.0, -6.0]);             // actual translation (x, y, z)
        // Rotate the thing !
        mat4.rotate(modelViewMatrix,      // Destination matrix
            modelViewMatrix,                // matrix to rotate
            squareRotation,                 // amount to rotate in radians
            [0, 0, 1]);                     // axisof rotation
        mat4.rotate(modelViewMatrix,  // destination matrix
            modelViewMatrix,  // matrix to rotate
            squareRotation * .7,// amount to rotate in radians
            [0, 1, 0]);       // axis to rotate around (X)

        
    }

    strike() {
        // Strike
    }
}