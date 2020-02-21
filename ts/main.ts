/**
 * The class that starts it all
 */
class Main {
    // the canvas that will be drawn on
    private canvas: HTMLCanvasElement;
    // GL context
    private glContext: WebGLRenderingContext;

    //TODO read the shaders from files
    // Vertex Shader
    private const vsSource = `
        attribute vec4 aVertexPosition;
        attribute vec4 aVertexColor;
        
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;

        varying lowp vec4 vColor;

        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            vColor = aVertexColor;
        }`;
    // Fragment shader
    private const fsSource = `
        varying lowp vec4 vColor;
        
        void main() {
            //gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            gl_FragColor = vColor;
        }`;

    private shaderProgram: ;

    private gameWorld: GameWorld;

    private oldTime: number;
    private deltaTime: number;

    constructor() {
        this.canvas = document.getElementById("#glCanvas") as HTMLCanvasElement;
        this.glContext = this.canvas.getContext("webgl");

        this.gameWorld = new GameWorld();

        this.initShaders();

        this.initEvents();

        this.oldTime = 0.0;
        requestAnimationFrame(this.update);
    }

    private initShaders(): void {
        this.shaderProgram = initShaderProgram(this.glContext, this.vsSource, this.fsSource);
        this.programInfo = {
            program: this.shaderProgram,
            attribLocations: {
                vertexPosition: this.glContext.getAttribLocation(this.shaderProgram, 'aVertexPosition'),
                vertexColor: this.glContext.getAttribLocation(this.shaderProgram, 'aVertexColor'),
            },
            uniformLocation: {
                projectionMatrix: this.glContext.getUniformLocation(this.shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: this.glContext.getUniformLocation(this.shaderProgram, 'uModelViewMatrix'),
            },
        };
    }

    private initEvents(): void {
        this.canvas.addEventListener("mousedown", function (e) { this.gameWorld.getMouse().mouseDown(e) }, false);
        this.canvas.addEventListener("mouseup", function (e) { this.gameWorld.getMouse().mouseUp(e) }, false);
        this.canvas.addEventListener("mouseout", function (e) { this.gameWorld.getMouse().mouseUp(e) }, false);
        this.canvas.addEventListener("mousemove", function (e) { this.gameWorld.getMouse().mouseMove(e) }, false);

        document.addEventListener("keydown", function (e) { this.gameWorld.getKeyboard().keyDown(e.keyCode) }, false);
        document.addEventListener("keyup", function (e) { this.gameWorld.getKeyboard().keyUp(e.keyCode) }, false);
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

new Main();