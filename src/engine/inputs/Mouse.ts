class Mouse {

    private pos: Float32Array;
    private buttons: boolean[];
    private lock: boolean;

    constructor() {
        this.pos = vec2.fromValues(0.0, 0.0);
        this.buttons = [false, false, false, false];
        this.lock = false;
    }

    public mouseDown(e: MouseEvent): void {
        e.preventDefault();
        this.buttons[e.button] = true;
    }

    public mouseUp(e: MouseEvent): void {
        e.preventDefault();
        this.buttons[e.button] = false;
    }

    public mouseMove(e: MouseEvent): void {
        e.preventDefault();
        //vec2.set(this.pos, e.pageX, e.pageY);
        vec2.add(this.pos, this.pos, vec2.fromValues(e.movementX, e.movementY));
        vec2.normalize(this.pos, this.pos);
        console.log(this.pos);
    }

    public getPos(): Float32Array{
        return this.pos;
    }

    public getButts(): boolean[] {
        return this.buttons;
    }

    public setLock(set: boolean): void {
        this.lock = set;
    }

    public getLock(): boolean {
        return this.lock;
    }
}