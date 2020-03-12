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
    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]) {
        super.update(deltaTime, mousePos, mouseButts, keys);
        // Update the element
        // To be honest, not much to do.
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        // Draw your stuff
        super.draw(modelViewMatrix, renderer);
    }
}