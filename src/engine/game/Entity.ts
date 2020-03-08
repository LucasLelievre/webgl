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
     * Set the enity's direction
     * @param newDir the new direction
     */
    public setDir(newDir: Float32Array): void {
        this.dir = newDir;
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
    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        // Draw your stuff

        // Translate    out             in              translation
        mat4.translate(modelViewMatrix, modelViewMatrix, this.getPos());
        //Scale         out             in              scale
        mat4.scale(modelViewMatrix, modelViewMatrix, this.size);
        // Rotation     out             in              angle (radian)          axis
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[0] * Math.PI, vec3.fromValues(1, 0, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[1] * Math.PI, vec3.fromValues(0, 1, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[2] * Math.PI, vec3.fromValues(0, 0, 1));

        // Render the mesh with the updates modelViewMatrix
        renderer.render(this.getMesh(), modelViewMatrix);
        // Draw the children
        this.children.forEach(child => { child.draw(modelViewMatrix, renderer); });
    }
}