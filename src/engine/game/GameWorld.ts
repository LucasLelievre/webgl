class GameWorld {

    private gameEntities: Entity[];
    private camera: Camera;
    private renderer: Renderer;
    private mouse: Mouse;
    private keyboard: Keyboard;


    constructor() {
        //TODO tree for physics
        this.gameEntities = [];

        this.camera = new Camera(vec3.fromValues(0, -3, 0), vec3.fromValues(18, 0, 0));

        this.renderer = new Renderer();

        this.mouse = new Mouse();

        this.keyboard = new Keyboard();

        this.init();
    }

    /**
     * Initialize the scene
     */
    private init(): void {
        // Here are the entities that will be part of the game

        this.addGameEntity(new Player(vec3.fromValues(0, 0, -7), vec3.fromValues(0, 0, 1)));
        this.addGameEntity(new Wall(vec3.fromValues(0, -1, -7), vec3.fromValues(1, 0, 0), vec3.fromValues(3, 0.1, 2)));
    }

    /**
     * Add an entity to the game
     * @param entity Entity to add
     */
    public addGameEntity(entity: Entity): void {
        this.gameEntities.push(entity);
    }

    /**
     * Resize the canvas to fit the browser
     */
    public resizeViewport(): void {
        //TODO maybe something better (change only if size is changed)
        if (Main.getGlContext().canvas.width != window.innerWidth || Main.getGlContext().canvas.height != window.innerHeight) {
            Main.getGlContext().canvas.width = window.innerWidth;
            Main.getGlContext().canvas.height = window.innerHeight;
            Main.getGlContext().viewport(0,0,Main.getGlContext().canvas.width,Main.getGlContext().canvas.height);
            this.renderer.resize();
        }
    }

    /**
     * Update all the game's entities
     * @param deltaTime time since last update
     */
    public update(deltaTime: number): void {
        this.camera.update(this.keyboard.getKeys());
        this.gameEntities.forEach(entity => {
            entity.update(deltaTime, this.keyboard.getKeys());
        });
    }

    /**
     * Draw all the game's entites
     */
    public render(): void {
        
        this.resizeViewport();

        Main.getGlContext().clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
        Main.getGlContext().clearDepth(1.0);                 // Clear everything
        Main.getGlContext().enable(Main.getGlContext().DEPTH_TEST);           // Enable depth testing
        Main.getGlContext().depthFunc(Main.getGlContext().LEQUAL);            // TODO what is this

        Main.getGlContext().clear(Main.getGlContext().COLOR_BUFFER_BIT | Main.getGlContext().DEPTH_BUFFER_BIT);

        const modelViewMatrix = mat4.create();

        this.gameEntities.forEach(entity => {

            // Reset the model-view matrix
            mat4.identity(modelViewMatrix);

            // move world to camera
            mat4.rotate(modelViewMatrix, modelViewMatrix, this.camera.getDir()[0] * Math.PI / 180, vec3.fromValues(1, 0, 0));
            mat4.rotate(modelViewMatrix, modelViewMatrix, this.camera.getDir()[1] * Math.PI / 180, vec3.fromValues(0, 1, 0));
            mat4.rotate(modelViewMatrix, modelViewMatrix, this.camera.getDir()[2] * Math.PI / 180, vec3.fromValues(0, 0, 1));
            mat4.translate(modelViewMatrix, modelViewMatrix, this.camera.getPos());

            entity.draw(modelViewMatrix);
            this.renderer.render(entity.getMesh(), modelViewMatrix);
        });
    }

    public getMouse() {
        return this.mouse;
    }

    public getKeyboard() {
        return this.keyboard;
    }
}
