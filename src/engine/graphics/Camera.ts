class Camera {

    private dir: Float32Array;
    private pos: Float32Array;

    constructor(pos: Float32Array, dir: Float32Array) {
        this.dir = dir;
        this.pos = pos;
    }

    public update(mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        console.log(keys);
        
        //TODO camera update
        if (keys.indexOf("A")) vec3.subtract(this.pos, this.pos, vec3.fromValues(0.1, 0.0, 0.0)); // left
        if (keys.indexOf("D")) vec3.add(this.pos, this.pos, vec3.fromValues(0.1, 0.0, 0.0)); // right
        if (keys.indexOf("S")) vec3.add(this.pos, this.pos, vec3.fromValues(0.0, 0.0, 1.0)); // forward
        if (keys.indexOf("W")) vec3.subtract(this.pos, this.pos, vec3.fromValues(0.0, 0.0, 1.0)); // backward
    }

    public getDir(): Float32Array {
        return this.dir;
    }

    public getPos(): Float32Array {
        return this.pos;
    }
}