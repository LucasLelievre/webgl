class Shader {

    private program: WebGLProgram;

    private vertexShader: string;
    private fragmentShader: string;

    constructor(pathV: string, pathS: string, ){
        //this.readVertexShader("./vertexShader.txt");
        //TODO read the shaders from files
        this.vertexShader = `
            attribute vec4 aVertexPosition;
            attribute vec4 aVertexColor;
            
            uniform mat4 uModelViewMatrix;
            uniform mat4 uProjectionMatrix;

            varying lowp vec4 vColor;

            void main() {
                gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
                vColor = aVertexColor;
            }`;

        this.fragmentShader = `
            varying lowp vec4 vColor;
            
            void main() {
                //gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
                gl_FragColor = vColor;
            }`;

        this.program = this.initShaderProgram(Main.getGlContext(), this.vertexShader, this.fragmentShader) as WebGLProgram;
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

    /*public readVertexShader(path: string): void {
        //TODO read file and store it in string
        this.vertexShader = "";
    }*/
}