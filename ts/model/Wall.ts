class Wall extends Entity {

    /**
     * Creates a Wall
     * @param {int} x position on the X axis
     * @param {int} y position on the Y axis
     */
	constructor(x: number, y: number){
        //TODO wall mesh
        super(x, y, 0, Mesh.getPlayerMesh());
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
    public draw(modelViewMatrix) {
        // Draw your stuff
        //TODO reset translate rotate scalate
    }
}