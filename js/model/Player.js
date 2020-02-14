class Player extends Entity {

    constructor(x, y, z, rotat, gl, mouse) {
        super(x, y, z, Mesh.getPlayerMesh(gl)); //TODO how to get rid of the gl here
        this.hp = 3;
        this.dir = vec3.fromValues(0, 0, 1);

        this.rotation = rotat;

        this.mouse = mouse;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime, keys) {
        console.log(this.dir);
        
        // Update the entity
        
        //Left
        if (keys.includes(37)) vec2.subtract(this.dir, this.dir, [1, 0, 0]);
        //right
        if (keys.includes(39)) vec2.add(this.dir, this.dir, [1, 0, 0]);
        //forwards
        if (keys.includes(38)) vec2.add(this.dir, this.dir, [0, 0, 1]);
        //backwards
        if (keys.includes(40)) vec2.subtract(this.dir, this.dir, [0, 0, 1]);

        //vec2.normalize(this.dir, this.dir);
        
        /*if (keys.includes(81)) this.pos[0] -= 0.1;
        if (keys.includes(68)) this.pos[0] += 0.1;
        if (keys.includes(90)) this.pos[2] -= 0.1;
        if (keys.includes(83)) this.pos[2] += 0.1;*/
        //forwards
        if (keys.includes(81)) vec2.subtract(this.pos, this.pos, this.dir);
        //backwards
        if (keys.includes(68)) vec2.add(this.pos, this.pos, this.dir);
        //left
        if (keys.includes(90)) vec2.subtract(this.pos, this.pos, [-this.dir[1], this.dir[0], this.dir[2]]);
        //right
        if (keys.includes(83)) vec2.subtract(this.pos, this.pos, [this.dir[1], -this.dir[0], this.dir[2]]);

        /*if (keys.includes(32)) this.pos[1] += 0.1;
        if (keys.includes(17)) this.pos[1] -= 0.1;*/
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(modelViewMatrix) {
        // alright, lets draw some shit

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate
        mat4.translate(modelViewMatrix, modelViewMatrix,
            [this.getPos()[0], this.getPos()[1], this.getPos()[2]]);

        // Rotation
        mat4.rotate(modelViewMatrix, modelViewMatrix,
            this.dir[0] * Math.PI / 180,
            [1, 0, 0]);
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