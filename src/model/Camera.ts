class Camera {

    private dir: vec3;
    private pos: vec3;

    constructor(pos: vec3, dir: vec3) {
        this.dir = dir;
        this.pos = pos;
    }

    public update(heys: string[]): void {
        //TODO camera update
    }

    public getDir(): vec3 {
        return this.dir;
    }

    public getPos(): vec3 {
        return this.pos;
    }
}