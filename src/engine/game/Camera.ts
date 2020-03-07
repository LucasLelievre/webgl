class Camera extends Entity {

    constructor(pos: Float32Array, dir: Float32Array) {
        super(pos, dir, vec3.fromValues(0.0, 0.0, 0.0), Mesh.getEmptyMesh());
    }

    public update(deltaTime: number, mousePos: Float32Array, mouseButts: boolean[], keys: string[]): void {
        super.update(deltaTime, mousePos, mouseButts, keys);
        //TODO camera update

        // Camrera translation
        if (keys.indexOf("A") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // left
        if (keys.indexOf("D") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.1, 0.0, 0.0)); // right
        if (keys.indexOf("S") != -1) vec3.subtract(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // forward
        if (keys.indexOf("W") != -1) vec3.add(this.getPos(), this.getPos(), vec3.fromValues(0.0, 0.0, 0.1)); // backward

        // Carmera rotation
        //if (mouseLock) {
            //vec2.scale(mousePos, mousePos, 0.5);
            vec3.set(this.getDir(), mousePos[1]/4, mousePos[0]/4, 0.0);
            if (this.getDir()[1] >=  360) {
                vec3.set(this.getDir(), this.getDir()[0], this.getDir()[1] - 360, 0.0);
                console.log("ding");
                
            }
            if (this.getDir()[1] <  0) vec3.set(this.getDir(), this.getDir()[0], this.getDir()[1] + 360, 0.0);
            if (this.getDir()[0] >  90) vec3.set(this.getDir(), 90, this.getDir()[1], 0.0);
            if (this.getDir()[0] < - 90) vec3.set(this.getDir(), -90, this.getDir()[1], 0.0);
            console.log(this.getDir());
            
        //}
    }

    public draw(modelViewMatrix: Float32List, renderer: Renderer) {
        super.draw(modelViewMatrix, renderer);
    }
}