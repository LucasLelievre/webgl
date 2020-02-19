class Player extends Entity {

    private hp:number;
    private rotation:number;
    private rotationAmount:number;

    constructor(x: number, y: number, z:number, rotat:number, gl) {
        super(x, y, z, Mesh.getPlayerMesh(gl));
        this.hp = 3;
        this.dir = vec3.fromValues(1, 0, 0);
        this.rotation = 0.0;
        this.rotationAmount = rotat;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number) {
        // Update the entity
        this.rotation = this.rotation + this.rotationAmount;
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: mat4) {
        // alright, lets draw some shit

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate
        mat4.translate(modelViewMatrix,                                // destination matrix
            modelViewMatrix,                                // matrix to translate
            [this.getPos()[0], this.getPos()[1], this.getPos()[2]]);    // actual translation (x, y, z)
        // Rotation
        mat4.rotate(modelViewMatrix,      // Destination matrix
            modelViewMatrix,                // matrix to rotate
            this.rotation,                 // amount to rotate in radians
            [0, 0, 1]);                     // axisof rotation
        mat4.rotate(modelViewMatrix,  // destination matrix
            modelViewMatrix,  // matrix to rotate
            this.rotation * .7,// amount to rotate in radians
            [0, 1, 0]);       // axis to rotate around (X)
    }

    public strike() {
        // Strike
    }
}