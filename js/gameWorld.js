class GameWorld {

    init(){
        // Here are the elements that will be seen in the game

        this.addGameElement(0, 0, 0); // a wall at (0,0)


        //this.setWorldSize();

        console.log("The game world has been initialized.");
    }

    /**
     * Create a game world
     */
    constructor() {
        this.gameElement = null;
        //this.sizeX = 0;
        //this.sizeY = 0;
    }

    /**
     * Add an element in the game
     * @param {int} x position X
     * @param {int} y position y
     * @param {int} type type of the element
     */
    addGameElement (x, y, type) {
        if (x > this.sizeX) this.sizeX = x;
        if (y > this.sizeY) this.sizeY = y;
        this.gameElement !== null ? this.gameElement.addGameElement(x, y, type)
                                  : this.gameElement = new GameElement(x, y, type);
    }

    /**
     * Get a element's type from position
     * @param {int} x position x of the element
     * @param {int} y position y of the element
     * @returns the element's type
     */
    getGameElementType (x, y) {
        return this.gameElement !== null ? this.gameElement.getType(x, y) : null;
    }

    /**
     * remove an element from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeGameElement (x, y) {
        // TODO reduce the size if needed
        if (this.gameElement.posX != x && this.gameElement.posY != y) {
            this.gameElement.removeGameElement(x, y)
        } else {
            this.gameElement = this.gameElement.next !== null ? this.gameElement.next : null;
        }
    }

    /**
     * // TODO set world size
     */
    /*setWorldSize(){
        this.gameElement.setWorldSize();
    }*/

    /**
     * Draw all the game's element
     */
    draw () {
        this.gameElement.draw(gl, programInfo, buffers, deltaTime);
    }
}