class GameWorld {

    init(gl) {
        // Here are the entities that will be seen in the game

        // this.addGameEntity(new Wall(1, 0)); // a wall at (0,0)
        this.addGameEntity(new Player(0, -1, -6, 0.01, gl));
        this.addGameEntity(new Player(1, 0, -7, 0.05, gl)); // a player at (0,0)


        //this.setWorldSize();

        console.log("The game world has been initialized.");
    }

    /**
     * Create a game world
     */
    constructor(gl, programInfo) {
        //this.width = 0;
        //this.height = 0;

        //TODO tree for faster physics
        this.gameEntities = [];

        this.renderer = new Renderer(gl, programInfo);

        this.mouse = new Mouse();

        this.init(gl);
    }

    /**
     * Add an entity in the game
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
        var name;

        this.gameEntities.forEach(entity => {
            if (vec2.exactEquals(entity.getPos(), vec2.fromValues(x, y))) {
                name = entity.constructor.name;
            }
        });
        return name;
        //TODO do something better than that
    }

    /**
     * remove an entity from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeGameEntity(x, y) {
        // TODO reduce the size if needed
        var i = 0;
        this.gameEntities.forEach(entity => {
            if (vec2.exactEquals(entity.getPos(), vec2.fromValues(x, y))) {
                this.gameEntities.splice(i, 1);
            }
            i++;
        });
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

    resizeViewport(gl) {
        //TODO maybe something better (change only if size is changed)
        if (gl.canvas.width != window.innerWidth || gl.canvas.height != window.innerHeight) {
            gl.canvas.width = window.innerWidth;
            gl.canvas.height = window.innerHeight;
            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            this.renderer.resize();
        }
    }

    /**
     * Updates all the game's entities
     * @param {*} deltaTime 
     */
    update(deltaTime) {
        this.gameEntities.forEach(entity => {
            entity.update(deltaTime);
        });
        //this.mouse.logger();
    }

    /**
     * Draw all the game's entities
     */
    render(gl) {

        //Setting the size to the size of the window
        this.resizeViewport(gl);


        gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
        gl.clearDepth(1.0);                 // Clear everything
        gl.enable(gl.DEPTH_TEST);           // Enable depth testing
        gl.depthFunc(gl.LEQUAL);            // TODO what is this

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);



        const modelViewMatrix = mat4.create();

        this.gameEntities.forEach(entity => {
            entity.draw(gl, modelViewMatrix);
            this.renderer.render(entity.getMesh(), modelViewMatrix);
        });




    }
}