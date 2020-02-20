class GameWorld {

    private gameEntities: Entity[];
    private camera: Camera;
    private renderer: Renderer;
    private mouse: Mouse;
    private keyboard: Keyboard;


    constructor() {
        //TODO tree for physics
        this.gameEntities = [];

        this.camera = new Camera([0, -3, 0], [18, 0, 0]);

        this.renderer = new Renderer(gl, programInfo);

        this.mouse = new Mouse(gl.canvas.width, gl.canvas.height);

        this.keyboard = new Keyboard();

        this.init(gl);
    }

    private init(): void {
        // Here are the entities that will be part of the game

        this.addGameEntity(new Player([0, 0, -7], [0, 0, 1]));
        this.addGameEntity(new Wall([0, -1, -7], [1, 0, 0], [3, 0.1, 2]));
    }

    public addGameEntity(entity: Entity): void {
        this.gameEntities.push(entity);
    }

    public resizeViewport(): void {
        //TODO
    }

    public update(deltaTime: number): void {
        //TODO
    }

    public render(): void {
        //TODO
    }
}