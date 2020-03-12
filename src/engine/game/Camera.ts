abstract class Camera extends Entity {

    private target: Entity;

    constructor(pos: Float32Array, dir: Float32Array, target: Entity) {
        super(pos, dir, vec3.fromValues(0.0, 0.0, 0.0), Mesh.getEmptyMesh());
        this.target = target;
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        super.update(deltaTime, mousePos, mouseButts, keys);
        //camera update
    }

    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        super.draw(modelViewMatrix, renderer);
    }

    public getTarget(): Entity {
        return this.target;
    }
}