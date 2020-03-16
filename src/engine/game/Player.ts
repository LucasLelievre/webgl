class Player extends Entity {

    private hp: number;

    constructor(pos: Float32Array, dir: Float32Array) {
        super(pos, dir, vec3.fromValues(1.0, 1.0, 1.0), Mesh.getPlayerMesh());
        this.hp = 3;
        //super.addChild(new Wall(vec3.fromValues(0.0, 3.0, 0.0), vec3.fromValues(0.0, 0.0, 0.0), vec3.fromValues(1.0, 1.0, 1.0)));
        //super.addChild(new Camera(vec3.fromValues(0, -1, 0), vec3.fromValues(0, 0, 0)));
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]) {
        super.update(deltaTime, mousePos, mouseButts, keys);
        // Update the entity
        /*TODO movement based on keys
        if (keys.indexOf("A") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // left
        if (keys.indexOf("D") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // right
        if (keys.indexOf("S") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // forward
        if (keys.indexOf("W") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // backward
        */
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        // alright, lets draw some shit

        super.draw(modelViewMatrix, renderer);
    }

    public strike() {
        // Strike
    }
}