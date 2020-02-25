class Enemy extends Entity {

    private hp: number;

    constructor(pos: vec3, dir: vec3) {
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
    public draw(modelViewMatrix: mat4) {
        // Draw your stuff
        //TODO reset translate rotate scalate
    }
}