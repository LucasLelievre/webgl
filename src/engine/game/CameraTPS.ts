class CameraTPS extends Camera {

    private distanceFromPlayer: number;
    private rotationSpeed: number;
    private boundX: number;
    private boundY: number;

    /**
     * Creates a new Third Person Camera
     * @param target the GameEntity that the camera will look at and follow
     * @param distance the distance between the camera and the target
     * @param rotationSpeed the speed of rotation, between 1 and 10
     */
    constructor(target: Entity, distance: number, rotationSpeed: number) {
        super(target);

        // This is how far the camera is from the player
        this.distanceFromPlayer = -distance;
        this.rotationSpeed = 11 - rotationSpeed;
        this.boundX = 180;
        this.boundY = 50;

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

        // bound the mouse position.
        mousePos[1] = Math.min(Math.max(mousePos[1], -this.boundY * this.rotationSpeed), this.boundY * this.rotationSpeed);
        mousePos[0] = Math.min(Math.max(mousePos[0], -this.boundX * this.rotationSpeed), this.boundX * this.rotationSpeed);

        var relativePos = vec3.fromValues(0.0, 0.0, this.distanceFromPlayer);
        // Rotate the relative vector based on mouse input
        vec3.rotateX(relativePos, relativePos, vec3.fromValues(0.0, 0.0, 0.0), mousePos[1] * Math.PI / 180 / this.rotationSpeed);
        vec3.rotateY(relativePos, relativePos, vec3.fromValues(0.0, 0.0, 0.0), -mousePos[0] * Math.PI / 180 / this.rotationSpeed);
        // set the cam pos to player pos + cam relativ pos
        vec3.add(this.getPos(), this.getTarget().getPos(), relativePos);
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