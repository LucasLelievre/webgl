class CameraTPS extends Camera {

    constructor(pos: Float32Array, dir: Float32Array) {
        super(pos, dir);
        //TODO tsp cam new
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        super.update(deltaTime, mousePos, mouseButts, keys);
        //TODO tps cam update
    }
    
    public draw(modelViewMatrix: Float32Array, renderer: Renderer): void {
        //TODO tps cam draw
        super.draw(modelViewMatrix, renderer);
    }
    
}