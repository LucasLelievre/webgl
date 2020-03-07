class Wall extends Entity {


    /**
     * Creates a Wall
     * @param {int} x position on the X axis
     * @param {int} y position on the Y axis
     */
    constructor(pos: Float32Array, dir: Float32Array, size: Float32Array) {
        //TODO wall mesh
        super(pos, dir, size, Mesh.getPlayerMesh());
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number) {
        // Update the element
        // To be honest, not much to do.
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List) {
        // Draw your stuff

        // Translate    out             in              translation
        mat4.translate(modelViewMatrix, modelViewMatrix, this.getPos());
        //Scale         out             in              scale
        mat4.scale(modelViewMatrix, modelViewMatrix, this.size);
        // Rotation     out             in              angle (radian)          axis
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[0] * Math.PI, vec3.fromValues(1, 0, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[1] * Math.PI, vec3.fromValues(0, 1, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[2] * Math.PI, vec3.fromValues(0, 0, 1));
    }
}