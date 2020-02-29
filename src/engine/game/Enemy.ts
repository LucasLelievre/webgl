class Enemy extends Entity {

    private hp: number;

    constructor(pos: Float32Array, dir: Float32Array) {
        //TODO enemy mesh
        super(pos, dir, Mesh.getPlayerMesh());

        this.hp = 3;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number) {
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List) {
        // Draw your stuff
        //TODO reset translate rotate scalate
    }
}