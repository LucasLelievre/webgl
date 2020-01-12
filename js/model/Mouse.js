class Mouse {

    constructor() {
        this.pos = vec2.fromValues(0.0, 0.0);
        this.dir = vec2.fromValues(0.0, 0.0);
        this.oldPos = vec2.fromValues(0.0, 0.0);
        this.butts = [false, false, false];
    }

    mouseDown(e) {
        this.butts[e.which - 1] = true;
    }

    mouseUp(e) {
        this.butts[e.which - 1] = false;
    }

    mouseMove(e) {
        vec2.copy(this.oldPos, this.pos);
        vec2.set(this.pos, e.pageX, e.pageY);
        console.log(this.dir[0] + " " + this.dir[1]);
        vec2.subtract(this.dir, this.pos, this.oldPos);
        
    }
}