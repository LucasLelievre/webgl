import { vec2 } from "../maths/gl-matrix"

class Mouse {

    private pos: vec2;
    private buttons: boolean[];

    constructor() {
        this.pos = vec2.fromValues(0.0, 0.0);
        this.buttons = [false, false, false, false];
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
        vec2.set(this.pos, e.pageX, e.pageY);
    }

    public getButts(): boolean[] {
        return this.buttons;
    }
}