abstract class Camera extends Entity {

    private target: Entity;

    constructor(target: Entity) {
        super(vec3.fromValues(0, 0, 0), vec3.fromValues(0, 0, 0), vec3.fromValues(0.0, 0.0, 0.0), Mesh.getEmptyMesh());
        this.target = target;
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        super.update(deltaTime, mousePos, mouseButts, keys);
        //camera update
    }
    
    /**
     * Returns the camera's lookAt matrix
     */
    public abstract getView(): Float32Array;

    /**
     * Return the camera's type, f for fps, t for tps
     */
    public abstract getType(): String;

    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        //super.draw(modelViewMatrix, renderer);
    }

    public getTarget(): Entity {
        return this.target;
    }
}