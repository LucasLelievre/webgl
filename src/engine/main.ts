/**
 * The class that starts it all
 */
class Main {
    // the canvas that will be drawn on
    private static canvas = document.querySelector("#glCanvas") as HTMLCanvasElement;
    // GL context
    private static glContext = Main.canvas.getContext("webgl") as WebGLRenderingContext;

    private gameWorld: GameWorld;

    private oldTime: number;
    private deltaTime: number;

    constructor() {
        
        this.gameWorld = new GameWorld();

        this.initEvents();

        this.oldTime = 0.0;
        this.deltaTime = 0.0;
        requestAnimationFrame(this.update.bind(this));
    }

    public static getCanvas(): HTMLCanvasElement {
        return Main.canvas as HTMLCanvasElement;
    }

    public static getGlContext(): WebGLRenderingContext {
        return Main.glContext as WebGLRenderingContext;
    }

    private initEvents(): void {
        // Initialize the lock and exit functions
        Main.canvas.requestPointerLock = Main.canvas.requestPointerLock; //TODO tester cross browser
        document.exitPointerLock = document.exitPointerLock;
        // lock the pointer on the canvas
        Main.canvas.addEventListener('click', Main.canvas.requestPointerLock, false);

        document.addEventListener('pointerlockchange', (e) => this.lockChangeAlert(e), false);
        document.addEventListener('mozpointerlockchange', (e) => this.lockChangeAlert(e), false);

        Main.canvas.addEventListener("mousedown", (e) => this.gameWorld.getMouse().mouseDown(e), false);
        Main.canvas.addEventListener("mouseup", (e) => this.gameWorld.getMouse().mouseUp(e) , false);
        Main.canvas.addEventListener("mouseout", (e) => this.gameWorld.getMouse().mouseUp(e) , false);
        Main.canvas.addEventListener("mousemove", (e) => this.gameWorld.getMouse().mouseMove(e) , false);

        document.addEventListener("keydown", (e) => this.gameWorld.getKeyboard().keyDown(e.key), false);
        document.addEventListener("keyup", (e) => this.gameWorld.getKeyboard().keyUp(e.key), false);
    }

    private lockChangeAlert(e: Event): void {
        console.log(e);
        if (document.pointerLockElement === Main.canvas) {
          console.log('The pointer lock status is now locked');
          this.gameWorld.getMouse().setLock(true);
        } else {
          console.log('The pointer lock status is now unlocked');
          this.gameWorld.getMouse().setLock(false);
        }
      }

    private update(newTime: number): void {
        this.deltaTime = newTime - this.oldTime;
        this.oldTime = newTime;

        // Update the game
        this.gameWorld.update(this.deltaTime);

        // Draw the scene
        this.render();

        // Call a new update and frame
        requestAnimationFrame(this.update.bind(this));
    }

    private render(): void {
        this.gameWorld.render();
    }

}

window.onload = function() { new Main() }