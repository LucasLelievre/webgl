import { Main } from "../main";
import simpleVert from './shaders/simple.vert';
import simpleFrag from './shaders/simple.frag';

export class Shader {

    private program: WebGLProgram;

    private vertexPosition: number;
    private vertexColor: number;
    private projectionMatrix: WebGLUniformLocation;
    private modelViewMatrix: WebGLUniformLocation;

    private vertexShader: string;
    private fragmentShader: string;

    constructor() {
        //TODO select the shader with a path

        this.vertexShader = simpleVert;
        this.fragmentShader = simpleFrag;

        this.program = this.initShaderProgram(Main.getGlContext(), this.vertexShader, this.fragmentShader) as WebGLProgram;

        this.vertexPosition = Main.getGlContext().getAttribLocation(this.program, 'aVertexPosition');
        this.vertexColor = Main.getGlContext().getAttribLocation(this.program, 'aVertexColor');
        this.projectionMatrix = Main.getGlContext().getUniformLocation(this.program, 'uProjectionMatrix') as WebGLUniformLocation;
        this.modelViewMatrix = Main.getGlContext().getUniformLocation(this.program, 'uModelViewMatrix') as WebGLUniformLocation;
    }

    public getProgram(): WebGLProgram {
        return this.program;
    }

    /**
     * return the vertex position attribute's location
     */
    public getVertexPosLocation(): number {
        return this.vertexPosition;
    }

    /**
     * return the vertex colour attribute's location 
     */
    public getVertexColorLocation(): number {
        return this.vertexColor;
    }

    /**
     * return the projection matrix uniform's location
     */
    public getProjectionMatrixLocation(): WebGLUniformLocation {
        return this.projectionMatrix;
    }

    /**
     * return the model view matric uniform's location
     */
    public getModelViewMatrixLocation(): WebGLUniformLocation {
        return this.modelViewMatrix;
    }

    /**
     * Initialize a shader program, so WebGL knows how to draw our data
     * @param gl webgl rendering context
     * @param vsSource vertex shader code
     * @param fsSource fragment shader code
     */
    private initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
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

    /**
     * Load shader code in the webgl rendering context
     * @param gl webgl rendering context
     * @param type shader type
     * @param source shader code
     */
    private loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
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

    /*public readVertexShader(path: string): void {
        //TODO read file and store it in string
        this.vertexShader = "";
    }*/
}