class Renderer {

    private glContext: WebGLRenderingContext;
    private programInfo: object;

    private projectionMatrix: mat4;

    constructor(glContext: WebGLRenderingContext, programInfo: object) {
        this.glContext = glContext;
        this.programInfo = programInfo;

        this.projectionMatrix = mat4.create();
    }

    public resize(): void {
        mat4.perspective(this.projectionMatrix,                             // out matrix
            45 * Math.PI / 180,                                             // field of view in radians
            this.glContext.canvas.width / this.glContext.canvas.height,     // aspect ratio
            0.1,                                                            // z near
            100.0)                                                          // z far
    }

    public render(mesh: Mesh, modelViewMatrix: mat4): void {
        // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
        {
            const numComponents = 3;  // pull out 2 values per iteration
            const type = this.glContext.FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            const offset = 0;         // how many bytes inside the buffer to start from
            this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, mesh.getPositions());
            this.glContext.vertexAttribPointer(
                this.programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            this.glContext.enableVertexAttribArray(
                this.programInfo.attribLocations.vertexPosition,
            );
        }

        // Tell WebGL how to pull out the colors from the color buffer into the vertexcolor attributer
        {
            const numComponents = 4;
            const type = this.glContext.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, mesh.getColours());
            this.glContext.vertexAttribPointer(
                this.programInfo.attribLocations.vertexColor,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            this.glContext.enableVertexAttribArray(
                this.programInfo.attribLocations.vertexColor
            );
        }

        // Tell WebGL which indices to use to index the vertices
        this.glContext.bindBuffer(this.glContext.ELEMENT_ARRAY_BUFFER, mesh.getIndices());

        // Tell WebGL to use our program when drawing
        this.glContext.useProgram(this.programInfo.program);

        // Set the shader uniforms
        this.glContext.uniformMatrix4fv(
            this.programInfo.uniformLocation.projectionMatrix,
            false,
            this.projectionMatrix);
        this.glContext.uniformMatrix4fv(
            this.programInfo.uniformLocation.modelViewMatrix,
            false,
            modelViewMatrix);

        {
            const vertexCount = mesh.getVertexCount();//TODO mesh's vertex count
            const type = this.glContext.UNSIGNED_SHORT;
            const offset = 0;
            this.glContext.drawElements(this.glContext.TRIANGLES, vertexCount, type, offset);
        }
    }
}