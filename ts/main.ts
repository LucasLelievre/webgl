/**
 * The class that starts it all
 */
class Main {
    // the canvas that will be drawn on
    private canvas: HTMLCanvasElement;
    // GL context
    private glContext: WebGLRenderingContext;

    constructor(){
        this.canvas = document.getElementById("#glCanvas") as HTMLCanvasElement;
        this.glContext = this.canvas.getContext("webgl");
        
        this.main();
    }

    public main() {

    }

}

new Main();