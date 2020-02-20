class Wall extends Entity {

    private size:vec3;

    /**
     * Creates a Wall
     * @param {int} x position on the X axis
     * @param {int} y position on the Y axis
     */
	constructor(pos: vec3, dir: vec3, size: vec3){
        //TODO wall mesh
        super(pos, dir, Mesh.getPlayerMesh());
        this.size = size;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number){
        // Update the element
        // To be honest, not much to do.
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: mat4) {
        // Draw your stuff

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate    out             in              translation
        mat4.translate(modelViewMatrix, modelViewMatrix, this.getPos());
        //Scale         out             in              scale
        mat4.scale(modelViewMatrix, modelViewMatrix, this.size);
        // Rotation     out             in              angle (radian)          axis
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[0] * Math.PI, [1, 0, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[1] * Math.PI, [0, 1, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[2] * Math.PI, [0, 0, 1]);
    }
}