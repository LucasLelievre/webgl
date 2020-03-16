class CameraTPS extends Camera {

    private distanceFromPlayer: number;

    constructor(distance: number, target: Entity) {
        super(target);

        // This is how far the camera is from the player
        this.distanceFromPlayer = distance;

        vec3.add(this.getPos(), this.getTarget().getPos(), vec3.fromValues(0.0, 0.0, this.distanceFromPlayer));
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
            
            // bound the mouse position.
            if (mousePos[1] > 89) mousePos[1] = 89;
            if (mousePos[1] < -89) mousePos[1] = -89;
            if (mousePos[0] > 180) mousePos[0] = -180;
            if (mousePos[0] < -180) mousePos[0] = 180;
            
            var relativePos = vec3.fromValues(0.0, 0.0, this.distanceFromPlayer);
            // Rotate the relative vector based on mouse input
            vec3.rotateX(relativePos, relativePos, vec3.fromValues(0.0, 0.0, 0.0), mousePos[1] * Math.PI / 180);
            vec3.rotateY(relativePos, relativePos, vec3.fromValues(0.0, 0.0, 0.0), mousePos[0] * Math.PI / 180);
            // set the cam pos to player pos + cam relativ pos
            vec3.add(this.getPos(), this.getTarget().getPos(), relativePos);
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