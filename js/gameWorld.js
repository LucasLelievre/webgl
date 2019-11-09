class GameWorld {
    /**
     * Create a game world
     */
    constructor() {
        this.worldObject = null;
    }

    /**
     * Add an element in the game
     * @param {int} x position X
     * @param {int} y position y
     * @param {int} type type of the element
     */
    addWorldObject (x, y, type) {
        this.worldObject !== null ? this.worldObject.addWorldObject(x, y, type)
                                  : this.worldObject = new WorldObject(x, y, type);
    }

    /**
     * Get a element's type from position
     * @param {int} x position x of the element
     * @param {int} y position y of the element
     * @returns the element's type
     */
    getWorldObjectType (x, y) {
        return this.worldObject !== null ? this.worldObject.getType(x, y) : null;
    }

    /**
     * remove an element from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeWorldObject (x, y) {
        if (this.worldObject.posX != x && this.worldObject.posY != y) {
            this.worldObject.removeWorldObject(x, y)
        } else {
            if (this.worldObject.next !== null) {
                this.worldObject = this.worldObject.next;
            } else {
                this.worldObject = null;
            }
        }
    }

    /**
     * Draw all the game's element
     */
    draw () {
        this.worldObject.draw();
    }
}