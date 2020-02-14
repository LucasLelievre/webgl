class Wall extends Entity {

    /**
     * Creates a Wall
     * @param {int} x position on the X axis
     * @param {int} y position on the Y axis
     */
	constructor(x, y, z, gl, dir, size){
        super(x, y, z, Mesh.getWallMesh(gl));
        this.dir = dir;
        this.size = size;
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
    draw(modelViewMatrix) {
        // Draw your stuff

        // Translate
        mat4.translate(modelViewMatrix,                                // destination matrix
            modelViewMatrix,                                // matrix to translate
            [this.getPos()[0], this.getPos()[1], this.getPos()[2]]);    // actual translation (x, y, z)
        //Scale
        mat4.scale(modelViewMatrix, modelViewMatrix, this.size);
        // Rotation
        mat4.rotate(modelViewMatrix,    // destination matrix
            modelViewMatrix,            // matrix to rotate
            this.dir[0] * Math.PI / 180,// amount to rotate in radians
            [1, 0, 0]);                 // axis to rotate around (x,y,z)
        mat4.rotate(modelViewMatrix, modelViewMatrix,
            this.dir[1] * Math.PI / 180,
            [0, 1, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix,
            this.dir[2] * Math.PI / 180,
            [0, 0, 1]);
    }
}