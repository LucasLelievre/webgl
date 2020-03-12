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
        //TODO movement based on keys
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