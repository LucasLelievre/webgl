class Renderer {

    private shader: Shader;

    private projectionMatrix: Float32List;

    constructor() {
        this.shader = new Shader();

        this.projectionMatrix = mat4.create();
    }

    public resize(): void {
        mat4.perspective(this.projectionMatrix,                             // out matrix
            45 * Math.PI / 180,                                             // field of view in radians
            Main.getGlContext().canvas.width / Main.getGlContext().canvas.height,     // aspect ratio
            0.1,                                                            // z near
            100.0)                                                          // z far
    }

    public render(mesh: Mesh, modelViewMatrix: Float32List): void {
        // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
        {
            const numComponents = 3;  // pull out 2 values per iteration
            const type = Main.getGlContext().FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            const offset = 0;         // how many bytes inside the buffer to start from
            Main.getGlContext().bindBuffer(Main.getGlContext().ARRAY_BUFFER, mesh.getPositions());
            Main.getGlContext().vertexAttribPointer(
                this.shader.getVertexPosLocation(),
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            Main.getGlContext().enableVertexAttribArray(
                this.shader.getVertexPosLocation(),
            );
        }

        // Tell WebGL how to pull out the colors from the color buffer into the vertexcolor attributer
        {
            const numComponents = 4;
            const type = Main.getGlContext().FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            Main.getGlContext().bindBuffer(Main.getGlContext().ARRAY_BUFFER, mesh.getColours());
            Main.getGlContext().vertexAttribPointer(
                this.shader.getVertexColorLocation(),
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            Main.getGlContext().enableVertexAttribArray(
                this.shader.getVertexColorLocation()
            );
        }

        // Tell WebGL which indices to use to index the vertices
        Main.getGlContext().bindBuffer(Main.getGlContext().ELEMENT_ARRAY_BUFFER, mesh.getIndices());

        // Tell WebGL to use our program when drawing
        Main.getGlContext().useProgram(this.shader.getProgram());

        // Set the shader uniforms
        Main.getGlContext().uniformMatrix4fv(
            this.shader.getProjectionMatrixLocation(),
            false,
            this.projectionMatrix);
            Main.getGlContext().uniformMatrix4fv(
            this.shader.getModelViewMatrixLocation(),
            false,
            modelViewMatrix);

        {
            const vertexCount = mesh.getVertexCount();
            const type = Main.getGlContext().UNSIGNED_SHORT;
            const offset = 0;
            Main.getGlContext().drawElements(Main.getGlContext().TRIANGLES, vertexCount, type, offset);
        }
    }
}
