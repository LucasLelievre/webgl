class GameWorld {

    private isPaused: boolean;

    private gameEntities: Entity[];
    private player: Player;
    private camera: Camera;
    private renderer: Renderer;
    private mouse: Mouse;
    private keyboard: Keyboard;

    private uiLayer: UILayer;
    private mainMenu: UILayer;


    constructor() {
        //TODO tree for physics
        this.isPaused = true;

        this.gameEntities = [];

        this.player = new Player(vec3.fromValues(0, 0, -7), vec3.fromValues(0, 0, 1));
        this.camera = new CameraTPS(this.player, 10, 9);

        this.renderer = new Renderer();

        this.uiLayer = new UILayer();
        this.uiLayer.addElement(new UIElement("HP : ", this.player.getHp(), ""));
        this.mainMenu = new UILayer();
        this.mainMenu.addElement(new UIElement("GAME PAUSED <div style=\"display: none\">", {}, "</div>"));

        this.mouse = new Mouse();

        this.keyboard = new Keyboard();

        this.init();
    }

    /**
     * Initialize the scene
     */
    private init(): void {
        // Here are the entities that will be part of the game
        this.addGameEntity(this.player);
        this.addGameEntity(new Wall(vec3.fromValues(0, -1, 0), vec3.fromValues(1, 0, 0), vec3.fromValues(3, 0.1, 2)));
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
            Main.getGlContext().viewport(0, 0, Main.getGlContext().canvas.width, Main.getGlContext().canvas.height);
            this.renderer.resize();
        }
    }

    /**
     * Update all the game's entities
     * @param deltaTime time since last update
     */
    public update(deltaTime: number): void {
        if (this.mouse.getButts()[0]) {
            this.gameEntities.forEach(entity =>  entity.update(deltaTime, this.mouse.getPos(), this.mouse.getButts(), this.keyboard.getKeys()) );

            //TODO this isn't really the place to do that. Maybe in the Camera class ?
            if (this.keyboard.getKeys().indexOf(Keyboard.switchView) != -1) {
                if (this.camera.getType() == "f")
                    this.camera = new CameraTPS(this.player, 10, 9)
                else 
                    this.camera = new CameraFPS(this.player);
            }
            
            this.camera.update(deltaTime, this.mouse.getPos(), this.mouse.getButts(), this.keyboard.getKeys());
            this.uiLayer.update();
        }
    }

    /**
     * Draw all the game's entites
     */
    public render(): void {

        this.resizeViewport();

        Main.getGlContext().clearColor(0.0, 0.0, 0.0, 1.0);                 // Clear to black, fully opaque
        Main.getGlContext().clearDepth(1.0);                                // Clear everything
        Main.getGlContext().enable(Main.getGlContext().DEPTH_TEST);         // Enable depth testing
        Main.getGlContext().depthFunc(Main.getGlContext().LEQUAL);          // TODO what is this

        Main.getGlContext().clear(Main.getGlContext().COLOR_BUFFER_BIT | Main.getGlContext().DEPTH_BUFFER_BIT);

        const lookAt = this.camera.getView();
        
        this.gameEntities.forEach(entity => entity.draw(mat4.copy(mat4.create(), lookAt), this.renderer) );
        
        if (this.isPaused != this.mouse.getButts()[0]) {
            this.isPaused = this.mouse.getButts()[0];
            this.mouse.getButts()[0] ? this.uiLayer.draw() : this.mainMenu.draw();
        }

    }

    public getMouse() {
        return this.mouse;
    }

    public getKeyboard() {
        return this.keyboard;
    }
}
