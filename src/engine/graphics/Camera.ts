class Camera {

    private dir: Float32Array;
    private pos: Float32Array;

    constructor(pos: Float32Array, dir: Float32Array) {
        this.dir = dir;
        this.pos = pos;
    }

    public update(mouseLock: boolean, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        //TODO camera update

        // Camrera translation
        if (keys.indexOf("A") != -1) vec3.add(this.pos, this.pos, vec3.fromValues(0.1, 0.0, 0.0)); // left
        if (keys.indexOf("D") != -1) vec3.subtract(this.pos, this.pos, vec3.fromValues(0.1, 0.0, 0.0)); // right
        if (keys.indexOf("S") != -1) vec3.subtract(this.pos, this.pos, vec3.fromValues(0.0, 0.0, 0.1)); // forward
        if (keys.indexOf("W") != -1) vec3.add(this.pos, this.pos, vec3.fromValues(0.0, 0.0, 0.1)); // backward

        // Carmera rotation
        if (mouseLock) {
            //vec2.scale(mousePos, mousePos, 0.5);
            vec3.set(this.dir, mousePos[1]/4, mousePos[0]/4, 0.0);
        }
    }

    public getDir(): Float32Array {
        return this.dir;
    }

    public getPos(): Float32Array {
        return this.pos;
    }
}