class CameraFPS extends Camera {

    constructor(target: Entity) {
        super(target);
        //TODO fps cam new
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        //TODO fps cam update
    }

    public getView(): Float32Array {
        //TODO return the lookAt matrix
        return mat4.identity(mat4.create());
    }
    
    //TODO comment function
    public getType(): String {
        return "f";
    }
    
    public draw(modelViewMatrix: Float32Array, renderer: Renderer): void {
        //super.draw(modelViewMatrix, renderer);
        //TODO fps cam draw
    }
    
}