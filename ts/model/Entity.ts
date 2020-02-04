class Entity {

    private pos: vec3;
    private dir: vec3;
    private mesh: Mesh;

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} Z position Z
     */
    constructor(public x: number, public y: number, public z: number, public mesh: Mesh) {
        this.pos = vec3.fromValues(x, y, z);
        //TODO maybe not this direction
        this.dir = vec3.fromValues(1, 0);
        this.mesh = mesh;
    }

    /**
     * Returns the entity's position
     */
    public getPos() {
        return this.pos;
    }

    /**
     * Returns the entity's mesh
     */
    public getMesh() {
        return this.mesh;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number){
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix) {
        // Draw your stuff
    }
}