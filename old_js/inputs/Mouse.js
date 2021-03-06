class Mouse {

    constructor(width, height) {
        this.screen = [width, height];
        this.pos = vec2.fromValues(0.0, 0.0);
        this.dir = vec2.fromValues(0.0, 0.0);
        this.oldPos = vec2.fromValues(0.0, 0.0);
        this.butts = [false, false, false, false];
    }

    mouseDown(e) {
        e.preventDefault();
        this.butts[e.button] = true;
    }

    mouseUp(e) {
        e.preventDefault();
        this.butts[e.button] = false;
    }

    mouseMove(e) {
        e.preventDefault();
        vec2.set(this.pos, e.pageX, e.pageY);
        vec2.subtract(this.dir, this.pos, this.oldPos);
        vec2.set(this.oldPos, e.pageX, e.pageY);
        vec2.normalize(this.dir, this.dir);
    }

    getButts(){
        return this.butts;
    }

    getDir(){
        return this.dir;
    }

    getScreen(){
        return this.screen;
    }

    logger() {
        console.log(this.pos[0] + " " + this.pos[1] + "\n" +
                    this.oldPos[0] + " " + this.oldPos[1] + "\n" +
                    this.dir[0] + " " + this.dir[1] + "\n" +
                    this.butts[0] + " " + this.butts[1] + " " + this.butts[2]);
    }
}