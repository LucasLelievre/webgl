class Player extends Entity {

    constructor(x, y, z, rotat, gl, mouse) {
        super(x, y, z, Mesh.getPlayerMesh(gl)); //TODO how to get rid of the gl here
        this.hp = 3;
        this.dir = vec3.fromValues(1, 0, 0);

        this.rotation = rotat;
        this.theta = 0.0;
        this.phi = 0.0;
        
        this.mouse = mouse;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime) {
        // Update the entity

        this.theta += this.rotation;
        this.phi += this.rotation;
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
        mat4.translate(modelViewMatrix,                                // destination matrix
            modelViewMatrix,                                // matrix to translate
            [this.getPos()[0], this.getPos()[1], this.getPos()[2]]);    // actual translation (x, y, z)
        // Rotation
        mat4.rotate(modelViewMatrix,      // Destination matrix
            modelViewMatrix,                // matrix to rotate
            this.theta,                 // amount to rotate in radians
            [0, 1, 0]);                     // axisof rotation
        mat4.rotate(modelViewMatrix,  // destination matrix
            modelViewMatrix,  // matrix to rotate
            this.phi,// amount to rotate in radians
            [1, 0, 0]);       // axis to rotate around (X)
    }

    strike() {
        // Strike
    }
}