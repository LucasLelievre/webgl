class CameraFPS extends Camera {

    constructor(pos: Float32Array, dir: Float32Array) {
        super(pos, dir);
        //TODO fps cam new
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        //TODO fps cam update
    }
    
    public draw(modelViewMatrix: Float32Array, renderer: Renderer): void {
        super.draw(modelViewMatrix, renderer);
        //TODO fps cam draw
    }
    
}