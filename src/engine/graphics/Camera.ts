class Camera {

    private dir: Float32Array;
    private pos: Float32Array;

    constructor(pos: Float32Array, dir: Float32Array) {
        this.dir = dir;
        this.pos = pos;
    }

    public update(mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        //TODO camera update
    }

    public getDir(): Float32Array {
        return this.dir;
    }

    public getPos(): Float32Array {
        return this.pos;
    }
}