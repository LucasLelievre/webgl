import { GameWorld } from "./game/GameWorld";

/**
 * The class that starts it all
 */
export class Main {
    // the canvas that will be drawn on
    private static canvas = document.getElementById("#glCanvas") as HTMLCanvasElement;
    // GL context
    private static glContext = Main.canvas.getContext("webgl") as WebGLRenderingContext;

    private gameWorld: GameWorld;

    private oldTime: number;
    private deltaTime: number;

    constructor() {
        
        this.gameWorld = new GameWorld();

        this.initEvents();

        this.oldTime = 0.0;
        this.deltaTime = 0.0;
        requestAnimationFrame(this.update);
    }

    public static getCanvas(): HTMLCanvasElement {
        return Main.canvas as HTMLCanvasElement;
    }

    public static getGlContext(): WebGLRenderingContext {
        return Main.glContext as WebGLRenderingContext;
    }

    /**
     * Initialize a shader program, so WebGL knows how to draw our data
     * @param gl webgl rendering context
     * @param vsSource vertex shader code
     * @param fsSource fragment shader code
     */
    private initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
        const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource) as WebGLShader;
        const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource) as WebGLShader;

        // Create the shader program
        const shaderProgram = gl.createProgram() as WebGLProgram;
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        // If creating the shader program failed, alert
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
            return null;
        }

        return shaderProgram;
    }

    private loadShader(gl: WebGLRenderingContext, type: number, source: string) {
        const shader = gl.createShader(type) as WebGLShader;
      
        // Send the source to the shader object
        gl.shaderSource(shader, source)
      
        // Compile the shader program
        gl.compileShader(shader);
      
        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert('An error occured compiling the shaders: ' + gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
      
        return shader;
      }



    private initEvents(): void {
        Main.canvas.addEventListener("mousedown", (e) => this.gameWorld.getMouse().mouseDown(e), false);
        Main.canvas.addEventListener("mouseup", (e) => this.gameWorld.getMouse().mouseUp(e) , false);
        Main.canvas.addEventListener("mouseout", (e) => this.gameWorld.getMouse().mouseUp(e) , false);
        Main.canvas.addEventListener("mousemove", (e) => this.gameWorld.getMouse().mouseMove(e) , false);

        document.addEventListener("keydown", (e) => this.gameWorld.getKeyboard().keyDown(e.key), false);
        document.addEventListener("keyup", (e) => this.gameWorld.getKeyboard().keyUp(e.key), false);
    }

    private update(newTime: number): void {
        this.deltaTime = newTime - this.oldTime;
        this.oldTime = newTime;

        // Update the game
        this.gameWorld.update(this.deltaTime);

        // Draw the scene
        this.render();

        // Call a new update and frame
        requestAnimationFrame(this.update);
    }

    private render(): void {
        this.gameWorld.render();
    }

}

window.onload = function() { new Main() }