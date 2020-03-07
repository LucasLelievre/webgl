abstract class Entity {

    private pos: Float32Array;
    private dir: Float32Array;
    private size: Float32Array;
    private mesh: Mesh;
    private children: Entity[];

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} Z position Z
     */
    constructor(pos: Float32Array, dir: Float32Array, size: Float32Array, mesh: Mesh) {
        this.pos = pos;
        this.dir = dir;
        this.size = size;
        this.mesh = mesh;
        this.children = [];
    }

    /**
     * Add a child to the entity
     * @param child entity to add to the children
     */
    public addChild(child: Entity): void {
        this.children.push(child);
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
    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]) {
        // Update the element
        // Update the children
        this.children.forEach(child => { child.update(deltaTime, mousePos, mouseButts, keys); });
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List) {
        // Draw your stuff
    }
}