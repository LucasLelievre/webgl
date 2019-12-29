class Renderer {
    constructor(gl, programInfo) {
        this.gl = gl;
        this.programInfo = programInfo;

        this.projectionMatrix = mat4.create();
    }

    resize() {
        mat4.perspective(this.projectionMatrix,
            45 * Math.PI / 180,                                         //angle in radians
            this.gl.canvas.clientWidth / this.gl.canvas.clientHeight,   //aspect ratio
            0.1,                                                        //z near
            100.0);                                                     //z far
    }

    render(mesh, modelViewMatrix) {

        // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
        {
            const numComponents = 3;  // pull out 2 values per iteration
            const type = this.gl.FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            const offset = 0;         // how many bytes inside the buffer to start from
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, mesh.getPositions());
            this.gl.vertexAttribPointer(
                this.programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            this.gl.enableVertexAttribArray(
                this.programInfo.attribLocations.vertexPosition,
            );
        }

        // Tell WebGL how to pull out the colors from the color buffer into the vertexcolor attributer
        {
            const numComponents = 4;
            const type = this.gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, mesh.getColours());
            this.gl.vertexAttribPointer(
                this.programInfo.attribLocations.vertexColor,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            this.gl.enableVertexAttribArray(
                this.programInfo.attribLocations.vertexColor
            );
        }

        // Tell WebGL which indices to use to index the vertices
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, mesh.getIndices());

        // Tell WebGL to use our program when drawing
        this.gl.useProgram(this.programInfo.program);

        // Set the shader uniforms
        this.gl.uniformMatrix4fv(
            this.programInfo.uniformLocation.projectionMatrix,
            false,
            this.projectionMatrix);
        this.gl.uniformMatrix4fv(
            this.programInfo.uniformLocation.modelViewMatrix,
            false,
            modelViewMatrix);

        {
            const vertexCount = 36;//TODO mesh's vertex count
            const type = this.gl.UNSIGNED_SHORT;
            const offset = 0;
            this.gl.drawElements(this.gl.TRIANGLES, vertexCount, type, offset);
        }
    }
}