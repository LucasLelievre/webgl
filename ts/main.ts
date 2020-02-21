/**
 * The class that starts it all
 */
class Main {
    // the canvas that will be drawn on
    private static canvas = document.getElementById("#glCanvas") as HTMLCanvasElement;
    // GL context
    private static glContext = Main.canvas.getContext("webgl") as WebGLRenderingContext;

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

    private shaderProgram: WebGLProgram;
    private programInfo: object;

    private gameWorld: GameWorld;

    private oldTime: number;
    private deltaTime: number;

    constructor() {

        this.initShaders();
        
        this.gameWorld = new GameWorld(Main.glContext, this.programInfo);

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

    private initShaders(): void {
        this.shaderProgram = this.initShaderProgram(Main.glContext, this.vsSource, this.fsSource) as WebGLProgram;
        this.programInfo = {
            program: this.shaderProgram,
            attribLocations: {
                vertexPosition: Main.glContext.getAttribLocation(this.shaderProgram, 'aVertexPosition'),
                vertexColor: Main.glContext.getAttribLocation(this.shaderProgram, 'aVertexColor'),
            },
            uniformLocation: {
                projectionMatrix: Main.glContext.getUniformLocation(this.shaderProgram, 'uProjectionMatrix'),
                modelViewMatrix: Main.glContext.getUniformLocation(this.shaderProgram, 'uModelViewMatrix'),
            },
        };
    }

    /**
     * Initialize a shader program, so WebGL knows how to draw our data
     * @param gl webgl rendering context
     * @param vsSource vertex shader code
     * @param fsSource fragment shader code
     */
    private initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
        const vertexShader = this.loadShader(gl, gl.VERTEX_SHADER, vsSource);
        const fragmentShader = this.loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

        // Create the shader program
        const shaderProgram = gl.createProgram();
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
        const shader = gl.createShader(type);
      
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