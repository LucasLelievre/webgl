class GameWorld {

    init() {
        // Here are the entities that will be seen in the game

        //this.addGameEntity(new Wall(0, 0)); // a wall at (0,0)
        this.addGameEntity(new Player(0, 0)); // a player at (0,0)


        //this.setWorldSize();

        console.log("The game world has been initialized.");
    }

    /**
     * Create a game world
     */
    constructor() {
        //TODO create a list for the entities
        //this.width = 0;
        //this.height = 0;
        this.gameEntities = [];
    }

    /**
     * Add an entity in the game
     * @param {int} x position X
     * @param {int} y position y
     * @param {int} type type of the entity
     */
    addGameEntity(gameEntity) {
        // this.setWorldSize(gameEntity.getSize().x, gameEntity.getSize().y);
        this.gameEntities.push(gameEntity);
    }

    /**
     * Get a entity's type from position
     * @param {int} x position x of the entity
     * @param {int} y position y of the entity
     * @returns the entity's type
     */
    getGameEntityType(x, y) {
        //return the entity at the pos
    }

    /**
     * remove an entity from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeGameEntity(x, y) {
        // TODO reduce the size if needed
        //TODO
        //this.gameEntities.splice(2, 1);
    }

    /**
     * Set world size based on the positions of the entities
     */
    setWorldSize() {
        //if (x > this.width) this.width = x;
        //if (y > this.height) this.height = y;
        // TODO set the world size
    }

    /**
     * Draw all the game's entities
     */
    render(gl, buffers, programInfo) {
        gl.canvas.width = window.innerWidth;
        gl.canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
        gl.clearDepth(1.0);                 // Clear everything
        gl.enable(gl.DEPTH_TEST);           // Enable depth testing
        gl.depthFunc(gl.LEQUAL);            // TODO what is this

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        const fieldOfView = 45 * Math.PI / 180; // in radians
        //const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        const aspect = window.innerWidth / window.innerHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();
        // note: glmatric.js always has the first argument as the destination to receive the result
        mat4.perspective(projectionMatrix,
            fieldOfView,
            aspect,
            zNear,
            zFar);

        const modelViewMatrix = mat4.create();
        
        // TODO call all entities' draw function
        this.gameEntities.forEach(entity => {
            entity.draw(gl);
            
        });

        // Tell WebGL how to pull out the positions from the position buffer into the vertexPosition attribute
        {
            const numComponents = 3;  // pull out 2 values per iteration
            const type = gl.FLOAT;    // the data in the buffer is 32bit floats
            const normalize = false;  // don't normalize
            const stride = 0;         // how many bytes to get from one set of values to the next
            // 0 = use type and numComponents above
            const offset = 0;         // how many bytes inside the buffer to start from
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexPosition,
            );
        }

        // Tell WebGL how to pull out the colors from the color buffer into the vertexcolor attributer
        {
            const numComponents = 4;
            const type = gl.FLOAT;
            const normalize = false;
            const stride = 0;
            const offset = 0;
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexColor,
                numComponents,
                type,
                normalize,
                stride,
                offset,
            );
            gl.enableVertexAttribArray(
                programInfo.attribLocations.vertexColor
            );
        }

        // Tell WebGL which indices to use to index the vertices
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

        // Tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // Set the shader uniforms
        gl.uniformMatrix4fv(
            programInfo.uniformLocation.projectionMatrix,
            false,
            projectionMatrix);
        gl.uniformMatrix4fv(
            programInfo.uniformLocation.modelViewMatrix,
            false,
            modelViewMatrix);

        {
            const vertexCount = 36;
            const type = gl.UNSIGNED_SHORT;
            const offset = 0;
            gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
        }
        
    }
}