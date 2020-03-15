class CameraTPS extends Camera {

    private relativePos: Float32Array;
    private distanceFromPlayer: number;

    constructor(pos: Float32Array, dir: Float32Array, target: Entity) {
        super(target);

        // This is how far the camera is from the player
        this.distanceFromPlayer = 5;
        // This is the 
        this.relativePos = vec3.fromValues(0, 0, 0);
        vec3.subtract(this.relativePos, pos, target.getPos());
        //TODO tsp cam new
    }

    /**
     * Updates the TPS camera in the 3D world
     * @param deltaTime Time since last update
     * @param mousePos Mouse position vector
     * @param mouseButts Mouse buttons status
     * @param keys Keyboard keys list
     */
    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        super.update(deltaTime, mousePos, mouseButts, keys);
        if (mouseButts[0]) {

            // Set the camera at the target's position
            // Rotate the camera to where we want to look (with the mouse pos)
            // translate the camera back a certain length

            /*TODO This should be in the player's update
            if (keys.indexOf("A") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // left
            if (keys.indexOf("D") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // right
            if (keys.indexOf("S") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // forward
            if (keys.indexOf("W") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // backward
            */

            // Carmera rotation
            //vec3.set(this.getDir(), mousePos[1] / 4, mousePos[0] / 4, 0.0);

            /*FIXME
            if (this.getDir()[1] >= 360) vec3.set(this.getDir(), this.getDir()[0], this.getDir()[1] - 360, 0.0);
            if (this.getDir()[1] < 0) vec3.set(this.getDir(), this.getDir()[0], this.getDir()[1] + 360, 0.0);
            if (this.getDir()[0] > 90) vec3.set(this.getDir(), 90, this.getDir()[1], 0.0);
            if (this.getDir()[0] < - 90) vec3.set(this.getDir(), -90, this.getDir()[1], 0.0);
            */
        }
    }

    public getView(): Float32Array {
        return mat4.lookAt(mat4.create(), this.getPos(), this.getTarget().getPos(), vec3.fromValues(0.0, 1.0, 0.0));
    }
    
    /**
     * 
     * @param modelViewMatrix Matrix to go from model to view space
     * @param renderer Renderer used to render the entities
     */
    public draw(modelViewMatrix: Float32Array, renderer: Renderer): void {
        //TODO tps cam draw
        //super.draw(modelViewMatrix, renderer);
    }
    
}