class Mouse {

    private pos: Float32Array;
    private buttons: boolean[];

    constructor() {
        this.pos = vec2.fromValues(0.0, 0.0);
                    //  mouseLock butt0   butt1   butt2
        this.buttons = [false, false, false, false];
    }

    public mouseDown(e: MouseEvent): void {
        e.preventDefault();
        this.buttons[e.button + 1] = true;        
    }

    public mouseUp(e: MouseEvent): void {
        e.preventDefault();
        this.buttons[e.button + 1] = false;
    }

    public mouseMove(e: MouseEvent): void {
        e.preventDefault();
        vec2.add(this.pos, this.pos, vec2.fromValues(e.movementX, e.movementY));
    }

    public getPos(): Float32Array{
        return this.pos;
    }

    public getButts(): boolean[] {
        return this.buttons;
    }

    public setLock(set: boolean): void {
        this.buttons[0] = set;
    }
}