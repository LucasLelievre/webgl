class GameWorld {

    private glContext: WebGLRenderingContext;
    private gameEntities: Entity[];
    private camera: Camera;
    private renderer: Renderer;
    private mouse: Mouse;
    private keyboard: Keyboard;


    constructor(glContext: WebGLRenderingContext) {
        this.glContext = glContext;

        //TODO tree for physics
        this.gameEntities = [];

        this.camera = new Camera([0, -3, 0], [18, 0, 0]);

        this.renderer = new Renderer(this.glContext, programInfo);

        this.mouse = new Mouse();

        this.keyboard = new Keyboard();

        this.init();
    }

    /**
     * Initialize the scene
     */
    private init(): void {
        // Here are the entities that will be part of the game

        this.addGameEntity(new Player([0, 0, -7], [0, 0, 1]));
        this.addGameEntity(new Wall([0, -1, -7], [1, 0, 0], [3, 0.1, 2]));
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
        if (this.glContext.canvas.width != window.innerWidth || this.glContext.canvas.height != window.innerHeight) {
            this.glContext.canvas.width = window.innerWidth;
            this.glContext.canvas.height = window.innerHeight;
            this.glContext.viewport(0,0,this.glContext.canvas.width,this.glContext.canvas.height);
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

        this.glContext.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
        this.glContext.clearDepth(1.0);                 // Clear everything
        this.glContext.enable(this.glContext.DEPTH_TEST);           // Enable depth testing
        this.glContext.depthFunc(this.glContext.LEQUAL);            // TODO what is this

        this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT);

        const modelViewMatrix = mat4.create();

        this.gameEntities.forEach(entity => {

            // Reset the model-view matrix
            mat4.identity(modelViewMatrix);

            // move world to camera
            mat4.rotate(modelViewMatrix, modelViewMatrix,
                this.camera.dir[0] * Math.PI / 180,
                [1, 0, 0]);
            mat4.rotate(modelViewMatrix, modelViewMatrix,
                this.camera.dir[1] * Math.PI / 180,
                [0, 1, 0]);
            mat4.rotate(modelViewMatrix, modelViewMatrix,
                this.camera.dir[2] * Math.PI / 180,
                [0, 0, 1]);
            mat4.translate(modelViewMatrix, modelViewMatrix,
                this.camera.pos);

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