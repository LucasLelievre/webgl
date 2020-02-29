abstract class Entity {

    private pos: Float32Array;
    private dir: Float32Array;
    private mesh: Mesh;

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} Z position Z
     */
    constructor(pos: Float32Array, dir: Float32Array, mesh: Mesh) {
        this.pos = pos;
        this.dir = dir;
        this.mesh = mesh;
    }

    /**
     * Returns the entity's position
     */
    public getPos(): Float32Array {
        return this.pos;
    }

    /**
     * Returns the entity's direction
     */
    public getDir(): Float32Array {
        return this.dir;
    }

    /**
     * Returns the entity's mesh
     */
    public getMesh(): Mesh {
        return this.mesh;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number, keys: string[]) {
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List) {
        // Draw your stuff
    }
}