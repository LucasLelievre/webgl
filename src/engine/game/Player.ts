class Player extends Entity {

    private hp: number;

    constructor(pos: Float32Array, dir: Float32Array) {
        super(pos, dir, vec3.fromValues(1.0, 1.0, 1.0), Mesh.getPlayerMesh());
        this.hp = 3;
        super.addChild(new Wall(vec3.fromValues(1.0, 0.0, 0.0), vec3.fromValues(0.0, 0.0, 0.0), vec3.fromValues(1.0, 1.0, 1.0)));
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
    public draw(modelViewMatrix: Float32List) {
        // alright, lets draw some shit

        // Translate
        //              out             in              translation
        mat4.translate(modelViewMatrix, modelViewMatrix, this.getPos());

        // Rotation
        //              out             int             angle (radian)          axis
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[0] * Math.PI, vec3.fromValues(1, 0, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[1] * Math.PI, vec3.fromValues(0, 1, 0));
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[2] * Math.PI, vec3.fromValues(0, 0, 1));
    }

    public strike() {
        // Strike
    }
}