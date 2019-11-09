class WorldObject {
    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} type type of the element (0 = wall, 1 = player, 2 = ennemy, 3 = end...)
     */
    constructor (x, y, type) {
        this.posX = x;
        this.posY = y;
        this.type = type;
        this.next = null;
    }

    /**
     * Create and add a new object in the game world
     * @param {int} x position of the new object
     * @param {int} y position y of the new object
     * @param {int} type type of the new object
     */
    addWorldObject(x, y, type){
        this.next !== null ? this.next.addWorldObject(x, y, type) : this.next = new WorldObject(x, y, type);
    }

    /**
     * Get an element's type from his position
     * @param {int} x position x
     * @param {int} y position y
     * @returns The element's type
     */
    getWorldObjectType (x, y) {
        return (this.posX == x && this.posY == Y) ? this.type : this.next.getType(x, y);
    }

    /**
     * Remove an element from the game world
     * @param {int} x position x
     * @param {int} y position y
     */
    removeWorldObject(x, y){
        if (this.next !== null && this.next.posX == x && this.next.posY == y) { // le suivant est il celui recherché ?
            this.next.next !== null ? this.next = this.next.next : this.next = null;
        } else { // sinon on continue à chercher
            this.next.removeWorldObject(x, y);
        }
    }

    /**
     * Draw the element and the next ones
     */
    draw () {
        //draw your stuff

        if (this.next !== null) this.next.draw();
    }
}