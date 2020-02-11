class Player extends Entity {

    constructor(x, y, z, rotat, gl, mouse) {
        super(x, y, z, Mesh.getPlayerMesh(gl)); //TODO how to get rid of the gl here
        this.hp = 3;
        this.dir = vec3.fromValues(0, 0, 0);

        this.rotation = rotat;

        this.mouse = mouse;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime, keys) {
        // Update the entity
        
        if (keys.includes(37)) this.dir[1] -= 1;
        if (keys.includes(39)) this.dir[1] += 1;
        if (keys.includes(38)) this.dir[0] -= 1;
        if (keys.includes(40)) this.dir[0] += 1;
        
        if (keys.includes(65)) this.pos[0] -= 0.1;
        if (keys.includes(68)) this.pos[0] += 0.1;
        if (keys.includes(87)) this.pos[2] -= 0.1;
        if (keys.includes(83)) this.pos[2] += 0.1;
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(gl, modelViewMatrix) {
        // alright, lets draw some shit

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate
        mat4.translate(modelViewMatrix,                                // destination matrix
            modelViewMatrix,                                // matrix to translate
            [this.getPos()[0], this.getPos()[1], this.getPos()[2]]);    // actual translation (x, y, z)
        // Rotation
        mat4.rotate(modelViewMatrix,    // destination matrix
            modelViewMatrix,            // matrix to rotate
            this.dir[0] * Math.PI / 180,// amount to rotate in radians
            [1, 0, 0]);                 // axis to rotate around (x,y,z)
        mat4.rotate(modelViewMatrix, modelViewMatrix,
            this.dir[1] * Math.PI / 180,
            [0, 1, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix,
            this.dir[2] * Math.PI / 180,
            [0, 0, 1]);
    }

    strike() {
        // Strike
    }
}