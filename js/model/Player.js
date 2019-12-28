class Player extends Entity {

    constructor(x, y, rotat) {
        super(x, y)
        this.hp = 3;
        this.dir = vec2.fromValues(1, 0);
        this.squareRotation = 0.0;
        this.rotation = rotat;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime) {
        // Update the entity
        this.squareRotation += this.rotation;
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(gl, modelViewMatrix) {
        // alright, lets draw some shit

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate
        mat4.translate( modelViewMatrix,                                // destination matrix
                        modelViewMatrix,                                // matrix to translate
                        [this.getPos()[0], this.getPos()[1], -6.0]);    // actual translation (x, y, z)
        // Rotation
        mat4.rotate(modelViewMatrix,      // Destination matrix
            modelViewMatrix,                // matrix to rotate
            this.squareRotation,                 // amount to rotate in radians
            [0, 0, 1]);                     // axisof rotation
        mat4.rotate(modelViewMatrix,  // destination matrix
            modelViewMatrix,  // matrix to rotate
            this.squareRotation * .7,// amount to rotate in radians
            [0, 1, 0]);       // axis to rotate around (X)
    }

    strike() {
        // Strike
    }
}