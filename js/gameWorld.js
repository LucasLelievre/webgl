class GameWorld {

    init(){
        // Here are the elements that will be seen in the game

        this.addWorldElement(0, 0, 0); // a wall at (0,0)
    }
    
    /**
     * Create a game world
     */
    constructor() {
        this.worldElement = null;
    }

    /**
     * Add an element in the game
     * @param {int} x position X
     * @param {int} y position y
     * @param {int} type type of the element
     */
    addWorldElement (x, y, type) {
        this.worldElement !== null ? this.worldElement.addWorldElement(x, y, type)
                                  : this.worldElement = new WorldElement(x, y, type);
    }

    /**
     * Get a element's type from position
     * @param {int} x position x of the element
     * @param {int} y position y of the element
     * @returns the element's type
     */
    getWorldElementType (x, y) {
        return this.worldElement !== null ? this.worldElement.getType(x, y) : null;
    }

    /**
     * remove an element from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeWorldElement (x, y) {
        if (this.worldElement.posX != x && this.worldElement.posY != y) {
            this.worldElement.removeWorldElement(x, y)
        } else {
            if (this.worldElement.next !== null) {
                this.worldElement = this.worldElement.next;
            } else {
                this.worldElement = null;
            }
        }
    }

    /**
     * Draw all the game's element
     */
    draw () {
        this.worldElement.draw();
    }
}